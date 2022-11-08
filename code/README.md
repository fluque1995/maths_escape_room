# Source code

In this folder, the source code to deploy the objects in the escape room and
give them reactivity is stored.

## Code structure and employed technologies

The code in this folder can be grouped into three main blocks, depending on its
usage and the underlying technology.

- Objects definition, deployment and interaction with Gather Town: This code,
  written mainly in TypeScript, is in charge of defining the interactive
  objects, placing them in the proper location, and listen to the game events to
  react accordingly to the problem solutions given by the students. This code
  relies heavily on the
  ![gather-game-client](https://www.npmjs.com/package/@gathertown/gather-game-client)
  NPM package, which is a package built by the gather town developers to
  interact with gather spaces. You can access to its documentation
  ![here](http://gather-game-client-docs.s3-website-us-west-2.amazonaws.com/modules.html)
  (under construction). This module is composed of the following files:

  - `tsconfig.json` and `package.json`: Configuration files for an NPM project. Do
    not touch them unless you know what you are doing. They will probably not
    influence the rest of the code.
  - `config.ts`: This file contains configuration parameters. For the moment, it
    only contains an object that relates room names with its IDs in the
    space. It is used to ease the way to reference to rooms in other parts of
    the code, since room IDs are auto-generated and usually difficult to
    remember.
  - `setup_rooms.ts and` and `run_listeners.ts`: This two files are the core of the
    application. They are in charge of placing the objects properly and listen
    to the events in game to react adequately to them, respectively.
  - `src` folder: In this folder, all the additional code is implemented. It is
    divided in three folders:
	- `assets`: It contains all the information of the interactive objects
      employed during the game. In file `assets_urls.ts`, the information about
      URL endpoints for the objects' sprites is stored. Using those objects, you
      can refer to the object URLs without having to remember the complete
      direction. In file `portals.ts`, the portals between rooms are
      defined. Portals are used to travel between different rooms in the same
      space. In order to simulate the effect of crossing a door to another room,
      you will have to place at least two portals, from one of the rooms to the
      other and vice-versa. The portals in this game are mainly simulating this
      door effect. In files `<problem>_objects.ts`, the objects for each one of
      the problems are defined. Usually, those objects are the interactive
      objects used to give information about the problem or tools to help with
      the resolution (GeoGebra applets, collaborative spreadsheets...), the
      computer where the solution to the problem can be given, and the doors
      associated to that problem. Associated doors are those that will be opened
      upon completion.
    - `initialization`: In this folder, the function helpers to initialize the
      objects are implemented. In the file `placers.ts`, there are three
      functions, one to place the portals of one map, one to place an object and
      make it impassable, and one to iterate over a list of objects and place
      all of them properly.
    - `interactions`: In this folder, the helper functions to deal with object
      interactions are placed. In `doors.ts`, functions to interact with doors
      are implemented. In `timers.ts`, basic functionality to manage a game
      timer is implemented. That timer has been used in the article to measure
	  how much time the students need to solve each one of the problems.
  - `.env` file: In this file, environment variables are defined. Most of the
	information in this file is sensitive, so be careful not to place it
	publicly in internet. The current file is a placeholder one, with most of
	the variables set to empty. Please set them accordingly before executing the
	scripts, since they will not work properly with the undefined variables.
	- `API_KEY`: This is the API key to connect to Gather Town. You will need to
      generate an API key in order to connect to the game using the client. You
      can generate your own API key in this direction: https://app.gather.town/apikeys
	- `GATHER_SPACE`: The URL to the space you want to connect to. When you are
      connected to a Gather space, the browser url will be something like
      https://app.gather.town/app/AdfasAdfSADFafds/space_name. The URL to the
      space will be the last two fields (in this case,
      `AdfasAdfSADFafds/space_name`)
    - `EXTERNAL_CALL`: The link to the external call in your desired service
      that the students will use to communicate with each other. It will be
      displayed in a walkie-talkie the students will find in the first room
      after the explanation one.
    - `SPREADSHEET`: Collaborative spreadsheet the students will use in the
      resolution of one of the problems
    - `GEOGEBRA_RESTRICTED_SERVER` and `GEOGEBRA_RESTRICTED_CLIENT`: Pair of
	  URLs pointing to a GeoGebra client-server setup. You can find a basic
	  implementation of this system in
	  https://fluque1995/geogebra_client_server, together with a brief
	  explanation of it. If you are lucky enough, I will still be serving my own
	  setup of this system in my own server, you can use it as you like, but I
	  do not guarantee any kind of availability or maintenance. Different
	  numbers at the end of the URL will mean different server-clients pairs, so
	  use a random big number to avoid collisions with other potential users.
- Docker containerization and deployment: The system is intended to be deployed
  using docker, since it is a simple way to run applications under the same
  conditions in different machines, and keep applications running during long
  periods of time. The system is prepared for deploy using `docker` and
  `docker-compose`.
  - `Dockerfile`: This file defines the set of instructions needed to build the
    docker image. Both containers use the same docker image as base, since the
	only file they differ in is the execution script. We think it is better to
	have only one image with all the information rather than two separate but
	very similar specialized images.
  - `docker-compose.yml`: This file defines the two services that compose the
    application. The first one, `gather-setup`, is in charge of placing the
    objects in map and finish the connection with the space. The other one,
    `gather-listeners`, is intended to run permanently in the background and
    listen to the events in game. If the container is not running, the objects
	in the game become unresponsive, and it is not possible to open the doors
	using the passwords.
- Automation of replicas using Python: Since it is necessary to have one copy of
  the space for each gaming group playing simultaneously, the replication of the
  system is almost fully automated:
  - `environments` folder: In this folder, one environment file for each replica
	has to be created. There is one example in it, called `.env-1`. It is
	identical to the file `.env` described in previous section. Each file will
	be responsible for one instance of the game, so it has to point to the
	proper gather space, and have its independent external call, spreadsheet,
	and geogebra client-server system.
  - `docker-compose.yml.template`: This file is a replica of the
	`docker-compose.yml` explained before, and it is used to generate the
	services associated to the environment files in the previous folder.
  - `create_services.py`: This script iterates over the environment files and
	define two services associated to it, one `gather-setup` and one
	`gather-listeners`. It generates the proper `docker-compose.yml` with all the
	services needed to manage the replicas. It executes as a normal python
	script (`python create_services.py`)
	> CAUTION!: This script overwrites the `docker-compose.yml` file. If you do
	> not want to lose it, make a copy in advance
