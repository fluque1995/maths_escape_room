import { Game } from "@gathertown/gather-game-client";
import { portals } from '../assets/portals';

function placePortals(game: Game): void {
    for (let portalInfo of portals) {
        console.log("Setting portals for room " + portalInfo.mapId);
        game.setMapPortals(portalInfo.mapId, portalInfo.portals);
    }
};

function placeObject(game: Game, mapId: string, obj: any): void {
    console.log("Placing object " + obj.id);
    game.setObject(mapId, obj.id, obj);
    if (!obj.id.includes("teleport")) {
        for (let i = 0; i < obj.width; i++) {
            for (let j = 0; j < obj.height; j++) {
                game.setImpassable(mapId, obj.x + i, obj.y + j, true);
            }
        }
    }
};

function placeObjectsInRoom(game: Game, mapId: string, objectsList: any[]): void {
    console.log("Placing objects for room " + mapId);
    for (let obj of objectsList) {
        placeObject(game, mapId, obj);
    }
};

export { placePortals, placeObjectsInRoom };
