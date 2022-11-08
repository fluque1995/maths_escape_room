import { Game } from "@gathertown/gather-game-client";
import { ServerClientEventContext } from "@gathertown/gather-game-client/dist/src/GameEventContexts";
import { ServerClientEventByCase } from "@gathertown/gather-game-client/dist/src/GameEventUtils";
import { objectUrls } from "../assets/assets_urls";
import { portals } from "../assets/portals";

interface Portal {
    x: number,
    y: number,
    targetMap: string,
    targetX: number,
    targetY: number
}

function bindComputerAndPortals<T>(
    data: ServerClientEventByCase<"playerInteracts">,
    context: ServerClientEventContext,
    game: Game,
    mapId: string,
    computerId: string,
    portalIds: Array<string>,
    comparisonFunction: (a: T, b: T) => boolean
): void {
    if (context.player?.map === mapId &&
        data.playerInteracts.objId === computerId &&
	'dataJson' in data.playerInteracts) {

	// Log interaction to terminal
	console.log("Interaction with " + data.playerInteracts.objId + " in mapId " + context.player.map);

	// Pick computer, correct answer and student answer
	const computerObj = game.getObject(data.playerInteracts.objId);
	const correctAnswer = computerObj!.obj!.properties!.correctAnswer;
        let text = JSON.parse(data.playerInteracts.dataJson!);
	// If comparison is successful (given answer is correct), set up
	// portals properly
	if (comparisonFunction(text.submitText!, correctAnswer)) {
	    const mapPortals = portals.find((obj) => { return obj.mapId === mapId });
	    var portalsList = mapPortals ? mapPortals.portals : [];
	    for (let portalId of portalIds) {
		var portal = game.getObject(portalId);
		var targetInfo = {x: portal!.obj!.x, y: portal!.obj!.y, ...portal!.obj!.properties!.teleportTarget};
		portalsList.push(targetInfo);
		var portalUpdate = {
		    highlighted: portal!.obj!.properties!.activeUrl,
		    previewMessage: "Enhorabuena, habéis activado el portal!",
		    properties: {
			message: "Enhorabuena, habéis activado el portal!",
		    }
		}
		game.setObject(mapId, portalId, portalUpdate);
	    }
	    game.setMapPortals(mapId, portalsList);
        } else {
	    console.log("Incorrect answer given")
	}
    }
}

export { bindComputerAndPortals };
