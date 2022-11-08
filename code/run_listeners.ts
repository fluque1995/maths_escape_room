import { Game } from "@gathertown/gather-game-client";
import { bindComputerAndDoors, openOrCloseAllDoors, passwordDoor } from "./src/interactions/doors";
import { bindComputerAndPortals } from "./src/interactions/portals";
import { roomIds } from "./config";
import { Timer, startGameTimer } from "./src/interactions/timers";

require("dotenv").config();

global.WebSocket = require("isomorphic-ws");

const setUpGame = () => {
    const API_KEY = process.env.API_KEY!
    console.log(API_KEY);
    let game = new Game(process.env.GATHER_SPACE!,
        () => Promise.resolve({ apiKey: API_KEY }));
    game.connect();
    game.subscribeToConnection((connected) => {
        console.log(connected ? "connected to Gather" : "disconnected from Gather");
    });
    return game;
};

const game = setUpGame(); // magic. ignore
var timer: Timer = {
    running: false,
    start: Date.now()
};

// First rooms interactions
game.subscribeToEvent(
    "playerInteracts",
    (data, context) => {
        bindComputerAndDoors(
            data, context, game, roomIds['first_room_1'], "computer-0", ["door-0"],
            (a: string, b: string) => { return a.toLowerCase().includes(b) },
            timer
        );
    }
);
game.subscribeToEvent(
    "playerInteracts",
    (data, context) => {
        bindComputerAndDoors(
            data, context, game, roomIds['first_room_2'], "computer-0", ["door-0"],
            (a: string, b: string) => { return a.toLowerCase().includes(b) },
            timer
        );
    }
);
game.subscribeToEvent(
    "playerInteracts",
    (data, context) => {
        bindComputerAndDoors(
            data, context, game, roomIds["first_room_3"], "computer-0", ["door-0"],
            (a: string, b: string) => { return a.toLowerCase().includes(b) },
            timer
        );
    }
);

// Problems 1 to 3 interactions
game.subscribeToEvent(
    "playerInteracts",
    (data, context) => {
        bindComputerAndDoors(
            data, context, game, roomIds["problems_1_2"], "computer-1", ["door-1-1", "door-1-2", "door-1-3"],
            (a, b) => { return a == b; },
            timer
        );
    }
);

game.subscribeToEvent(
    "playerInteracts",
    (data, context) => {
        bindComputerAndDoors(
            data, context, game, roomIds["problems_1_2"], "computer-2", ["door-2-1", "door-2-2", "door-2-3"],
            (a, b) => { return a == b; },
            timer
        );
    }
);

game.subscribeToEvent(
    "playerInteracts",
    (data, context) => {
        bindComputerAndDoors(
            data, context, game, roomIds["problems_3_4"], "computer-3", ["door-3-1", "door-3-2", "door-3-3"],
            (a, b) => { return a == b; },
            timer

        );
    }
);

game.subscribeToEvent(
    "playerInteracts",
    (data, context) => {
        bindComputerAndDoors(
            data, context, game, roomIds["problems_3_4"], "computer-4", ["door-4-1", "door-4-2", "door-4-3"],
            (a, b) => { return a == b; },
            timer
        );
    }
);

game.subscribeToEvent(
    "playerInteracts",
    (data, context) => {
        bindComputerAndDoors(
            data, context, game, roomIds["problem_5"], "computer-5", ["door-5-1", "door-5-2", "door-5-3"],
            (a, b) => { return a == b; },
            timer
        );
    }
);

game.subscribeToEvent(
    "playerInteracts",
    (data, context) => {
        openOrCloseAllDoors(
            data, context, game, 'computer-master',
            [
                {
                    problem: 'problem-1',
                    room: roomIds['problems_1_2'],
                    doors: ['door-1-1', 'door-1-2', 'door-1-3']
                },
                {
                    problem: 'problem-2',
                    room: roomIds['problems_1_2'],
                    doors: ['door-2-1', 'door-2-2', 'door-2-3']
                },
                {
                    problem: 'problem-3',
                    room: roomIds['problems_3_4'],
                    doors: ['door-3-1', 'door-3-2', 'door-3-3']
                },
                {
                    problem: 'problem-4',
                    room: roomIds['problems_3_4'],
                    doors: ['door-4-1', 'door-4-2', 'door-4-3']
                },
                {
                    problem: 'problem-5',
                    room: roomIds['problem_5'],
                    doors: ['door-5-1', 'door-5-2', 'door-5-3']
                }
            ],
        );
    }
);

game.subscribeToEvent(
    "playerInteracts",
    (data, context) => {
        passwordDoor(data, context, game, roomIds["explanation_room"], "door-master");
    }
);

game.subscribeToEvent(
    "playerInteracts",
    (data, context) => {
        startGameTimer(data, context, game, 'computer-master', timer);
    }
);


// game.subscribeToEvent("playerTriggersItem", (data, context) => {
//   let mapObject = game.getObject(data.playerInteracts.objId)!.obj; // magic, fills mapObject with data that looks like the obj we made above. this is the object the person interacted with
//   // more totally normal code here, like we've been doing
//   // let's see what happened first
//   console.log(context?.player?.name + " interacted with " + data.playerInteracts.objId);
//   // ok, we only want to do stuff if they interact with OUR object, so let's whip out some conditionals
// });
