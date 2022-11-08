import { Game } from "@gathertown/gather-game-client";
import { ServerClientEventContext } from "@gathertown/gather-game-client/dist/src/GameEventContexts";
import { ServerClientEventByCase } from "@gathertown/gather-game-client/dist/src/GameEventUtils";


type Timer = {
    running: boolean,
    start: number
};

function startGameTimer(
    data: ServerClientEventByCase<"playerInteracts">,
    context: ServerClientEventContext,
    game: Game,
    computerId: string,
    timer: Timer
): void {
    if (data.playerInteracts.objId === computerId &&
        'dataJson' in data.playerInteracts) {
        let command = JSON.parse(data.playerInteracts.dataJson!).submitCommand!;
        console.log("Command: " + command);
        if (command === 'start') {
            console.log("starting system timer...");
            timer.running = true;
            timer.start = Date.now();
        }
        else if (command === 'stop') {
            timer.running = false;
        }
    }
}

export { Timer, startGameTimer };
