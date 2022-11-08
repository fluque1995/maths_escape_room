import { Game } from "@gathertown/gather-game-client";
import { placePortals, placeObjectsInRoom } from "./src/initialization/placers";
import { roomIds } from "./config";
import { landingRoomObjects } from "./src/assets/landing_room_objects";
import { startRoomObjects } from "./src/assets/starting_room_objects";
import { problem1Objects } from "./src/assets/problem_1_objects";
import { problem2Objects } from "./src/assets/problem_2_objects";
import { problem3Objects } from "./src/assets/problem_3_objects";
import { problem4Objects } from "./src/assets/problem_4_objects";
import { problem5Objects } from "./src/assets/problem_5_objects";

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

var i = 3;
var step = 3;

setTimeout(() => {
    console.log("Setting up portals...");
    placePortals(game);
}, i * 1000);
i = i + step;

setTimeout(() => {
    console.log("Preparing first rooms...");
    placeObjectsInRoom(game, roomIds['explanation_room'], landingRoomObjects);
    placeObjectsInRoom(game, roomIds['first_room_1'], startRoomObjects);
    placeObjectsInRoom(game, roomIds['first_room_2'], startRoomObjects);
    placeObjectsInRoom(game, roomIds['first_room_3'], startRoomObjects);
}, i * 1000);
i = i + step;


setTimeout(() => {
    console.log("Preparing problem 1...");
    placeObjectsInRoom(game, roomIds['problems_1_2'], problem1Objects);
}, i * 1000);
i = i + step;

setTimeout(() => {
    console.log("Preparing problem 2...");
    placeObjectsInRoom(game, roomIds['problems_1_2'], problem2Objects);
}, i * 1000);
i = i + step;

setTimeout(() => {
    console.log("Preparing problem 3...");
    placeObjectsInRoom(game, roomIds['problems_3_4'], problem3Objects);
}, i * 1000);
i = i + step;

setTimeout(() => {
    console.log("Preparing problem 4...");
    placeObjectsInRoom(game, roomIds['problems_3_4'], problem4Objects);
}, i * 1000);
i = i + step;

setTimeout(() => {
    console.log("Preparing problem 5...");
    placeObjectsInRoom(game, roomIds['problem_5'], problem5Objects);
}, i * 1000);
i = i + step;

setTimeout(() => {
    console.log("Setup finished, disconnecting...");
    game.disconnect();
}, i * 1000);
