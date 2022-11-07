# Maths Escape Room

This repository contains the source code and assets developed for our research
project about mathematical communication. In it, we propose an activity based on
a Escape Room whose aim is to improve the mathematical communication among our
students.

The game is developed using the platform ![Gather Town](https://gather.town). This platform aims to
convert virtual interactions into a more human experience. To that purpose, they
offer a website with capability to create virtual spaces where attendants can
interact with each other and the surroundings. Moreover, they provide an (still
experimental) API ![(docs)](http://gather-game-client-docs.s3-website-us-west-2.amazonaws.com/modules.html) to interact with the spaces programmatically. Using
this API, objects can be placed in the environment, and they can be provided
with interactivity.

We leverage the flexibility of the platform and the API they provide to build an
interactive activity for our students. The activity is prepared to be played by
a group of 3 students, and it is composed of 5 tasks, ordered by ascending
difficulty.

This repository provides all the information you need to setup the activity with
your own students. An example of the escape room can be found ![here](https://gather.town).

<!-- TODO: Add a proper link to the functioning room -->

> DISCLAIMER: Problem statements are written in spanish (our mother
> tongue). However, it should not be difficult to modify the code to translate
> it into other languages.

## Activity description and example

The proposed activity is an escape room composed of 5 tasks. Tasks are ordered
in ascending difficulty, and they are tackled in a sequential manner. In order
to improve the communication capabilities of our students, the game is built in
such a way that players' paths are disjoint. Once the escape room starts, each
player will be teleported to an independent room, and they will not be able to
visit the rooms of their partners (although they can see each other in the
screen). The information needed to solve the problems will be then presented in
a fragmented way, and each player will find only a fragment of the information
needed to solve the task. Thus, they will have to communicate their information
to each other to solve the assignment properly. Without this communication, the
problems are not solvable, since every piece of information is relevant to the
task.

# Project technologies and dependencies

This section describes the technologies employed in this project
