import { Game } from "@gathertown/gather-game-client";
import { ServerClientEventContext } from "@gathertown/gather-game-client/dist/src/GameEventContexts";
import { ServerClientEventByCase } from "@gathertown/gather-game-client/dist/src/GameEventUtils";
import { objectUrls } from "../assets/assets_urls";
import { Timer } from "./timers";

function openDoor(game: Game, mapId: string, doorId: string, open: boolean): void {
    let door = game.getObject(doorId, mapId)!;
    if (open) {
        var doorStatus = {
            normal: door.obj!.properties!.openUrl,
            highlighted: door.obj!.properties!.openUrl,
            previewMessage: "Enhorabuena, habéis conseguido abrir la puerta!",
            properties: { ...door.obj!.properties! }
        };
        doorStatus.properties.closed = false;
        doorStatus.properties.message = "Enhorabuena, habéis conseguido abrir la puerta!";
        game.setObject(mapId, doorId, doorStatus);
        for (let i = 0; i < door.obj!.width; i++) {
            for (let j = 0; j < door.obj!.height; j++) {
                game.setImpassable(mapId, door.obj!.x + i, door.obj!.y + j, false);
            }
        }
    } else {
        var doorStatus = {
            normal: door.obj!.properties!.closedUrl,
            highlighted: door.obj!.properties!.closedUrl,
            previewMessage: "La puerta está cerrada, buscad la forma de abrirla por la habitación.",
            properties: { ...door.obj!.properties! }
        };
        doorStatus.properties.closed = true;
        doorStatus.properties.message = "La puerta está cerrada, buscad la forma de abrirla por la habitación";
        game.setObject(mapId, doorId, doorStatus);
        for (let i = 0; i < door.obj!.width; i++) {
            for (let j = 0; j < door.obj!.height; j++) {
                game.setImpassable(mapId, door.obj!.x + i, door.obj!.y + j, true);
            }
        }
    }
}

function bindComputerAndDoors<T>(
    data: ServerClientEventByCase<"playerInteracts">,
    context: ServerClientEventContext,
    game: Game,
    mapId: string,
    computerId: string,
    doorIds: Array<string>,
    comparisonFunction: (a: T, b: T) => boolean,
    timer: Timer
): void {
    if (context.player?.map === mapId &&
        data.playerInteracts.objId === computerId &&
        'dataJson' in data.playerInteracts) {

        // Log interaction to terminal
        console.log("Interaction with " + data.playerInteracts.objId + " in mapId " + context.player.map);

        // Pick computer, correct answer and student answer
        const computerObj = game.getObject(data.playerInteracts.objId, mapId);
        const correctAnswer = computerObj!.obj!.properties!.correctAnswer;
        let response = JSON.parse(data.playerInteracts.dataJson!).submitText!;
        // If comparison is successful (given answer is correct), open the doors
        if (typeof response !== "undefined") {
            if (timer.running) {
                var runningTime = Date.now() - timer.start;
                console.log("Response given after " + runningTime / 1000 + " seconds");
            } else {
                console.log("Not registering time");
            }

            if (comparisonFunction(response, correctAnswer)) {
                for (let doorId of doorIds) {
                    openDoor(game, mapId, doorId, true);
                }
                console.log("Correct answer given: " + response);
            } else {
                console.log("Incorrect answer given: " + response);
            }
        }
    }
}

interface DoorList {
    problem: string,
    room: string,
    doors: Array<string>
}

function openOrCloseAllDoors(
    data: ServerClientEventByCase<"playerInteracts">,
    context: ServerClientEventContext,
    game: Game,
    computerId: string,
    doorIds: Array<DoorList>,
): void {
    if (data.playerInteracts.objId === computerId &&
        'dataJson' in data.playerInteracts) {

        console.log("Interaction with " + data.playerInteracts.objId + " in mapId " + context.player!.map);

        let command = JSON.parse(data.playerInteracts.dataJson!).submitCommand!;
        let problem = JSON.parse(data.playerInteracts.dataJson!).submitProblem!;
        console.log("Command: " + command);
        console.log("Problem to interact: " + problem);
        var filteredList;
        if (problem === undefined) {
            filteredList = doorIds;
        } else {
            filteredList = doorIds.filter((obj) => { return obj.problem === problem; });
        }
        if (command === 'open') {
            var i = 1;
            for (let doorList of filteredList) {
                for (let door of doorList.doors) {
                    setTimeout(
                        () => {
                            console.log(doorList.room + " - " + door);
                            openDoor(game, doorList.room, door, true);
                        },
                        500 * i
                    );
                    i++;
                }
            }
        } else if (command === 'close') {
            var i = 1;
            for (let doorList of filteredList) {
                for (let door of doorList.doors) {
                    setTimeout(
                        () => {
                            console.log(doorList.room + " - " + door);
                            openDoor(game, doorList.room, door, false);
                        },
                        500 * i
                    );
                    i++;
                }
            }
        }
    }
}

function passwordDoor(
    data: ServerClientEventByCase<"playerInteracts">,
    context: ServerClientEventContext,
    game: Game,
    mapId: string,
    doorId: string
): void {
    if (context.player?.map === mapId &&
        data.playerInteracts.objId === doorId &&
        'dataJson' in data.playerInteracts) {

        // Log interaction to terminal
        console.log("Interaction with " + data.playerInteracts.objId + " in mapId " + context.player.map);

        // Pick computer, correct answer and student answer
        const doorObj = game.getObject(data.playerInteracts.objId);
        const correctAnswer = doorObj!.obj!.properties!.correctAnswer;
        let text = JSON.parse(data.playerInteracts.dataJson!);

        // Open the door during a few seconds if the answer is correct
        if (text.submitText! === correctAnswer) {
            openDoor(game, mapId, doorId, true);
            setTimeout(() => openDoor(game, mapId, doorId, false), 2000);
        } else {
            console.log("Incorrect answer given")
        }
    }
}

export { bindComputerAndDoors, openOrCloseAllDoors, passwordDoor };
