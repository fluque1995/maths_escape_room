import { objectUrls, externalUrls } from "./assets_urls";

require("dotenv").config();

var landingRoomObjects = [
    // Teleporters
    {
        _name: "Teleporter - player 1",
        x: 2,
        y: 2,
        orientation: 0,
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/5KXHBZX-f9edYGzcQfbyS",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/Qq3rsFqweKch6eD2SIYHm",
        type: 6,
        width: 1,
        height: 2,
        previewMessage: "Teletransporte - jugador 1",
        distThreshold: 1,
        id: "player-1-teleport",
        properties: {
            message: "Teletransporte - jugador 1"
        },
    },
    {
        _name: "Teleporter - player 2",
        x: 7,
        y: 2,
        orientation: 0,
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/5KXHBZX-f9edYGzcQfbyS",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/Qq3rsFqweKch6eD2SIYHm",
        type: 6,
        width: 1,
        height: 2,
        previewMessage: "Teletransporte - jugador 2",
        distThreshold: 1,
        id: "player-2-teleport",
        properties: {
            message: "Teletransporte - jugador 2"
        },
    },
    {
        _name: "Teleporter - player 3",
        x: 12,
        y: 2,
        orientation: 0,
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/5KXHBZX-f9edYGzcQfbyS",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/internal-dashboard/images/Qq3rsFqweKch6eD2SIYHm",
        type: 6,
        width: 1,
        height: 2,
        previewMessage: "Teletransporte - jugador 3",
        distThreshold: 1,
        id: "player-3-teleport",
        properties: {
            message: "Teletransporte - jugador 3"
        },
    },
    // Master computer
    {
        type: 7,
        id: "computer-master",
        _name: "Master computer",
        properties: {
            extensionData: {
                entries: [
                    {
                        type: "header",
                        value: "Control de puertas - administrador del juego",
                        key: "mainHeader",
                    },
                    {
                        type: "paragraph",
                        value: "Este ordenador permite controlar todas las puertas del juego. En la primera caja se puede introducir el comando para abrir (open) o cerrar (close). En la segunda se puede especificar el problema sobre el que se quiere actuar (dejar en blanco para actuar sobre todas las puertas). Por ejemplo, para actuar sobre el problema 1 se deberá especificar abajo (problem-1)",
                        key: "mainParagraph",
                    },
                    {
                        type: "text",
                        value: "Introduce el comando a ejecutar",
                        key: "submitCommand",
                    },
                    {
                        type: "text",
                        value: "Introduce el problema sobre el que actuar (blanco para todos, problem-N para actuar sobre el problema N)",
                        key: "submitProblem",
                    }

                ],
            },
        },
        x: 23,
        y: 2,
        normal: objectUrls.COMPUTER_FRONT_NORMAL,
        highlighted: objectUrls.COMPUTER_FRONT_HIGHLIGHTED,
        distThreshold: 1,
        orientation: 0,
        width: 1,
        height: 1
    },
    // Master door
    {
        id: "door-master",
        _name: "Master door",
        type: 7,
        normal: objectUrls.SMALL_VERTICAL_DOOR_CLOSED,
        highlighted: objectUrls.SMALL_VERTICAL_DOOR_CLOSED,
        previewMessage: "Pulsa x para desbloquear la puerta",
        x: 14,
        y: 3,
        width: 1,
        height: 3,
        properties: {
            message: "Pulsa x para desbloquear la puerta",
            closed: true,
            openUrl: objectUrls.SMALL_VERTICAL_DOOR_OPEN,
            closedUrl: objectUrls.SMALL_VERTICAL_DOOR_CLOSED,
            extensionData: {
                entries: [
                    {
                        type: "header",
                        value: "Apertura de puerta",
                        key: "mainHeader",
                    },
                    {
                        type: "paragraph",
                        value: "Introduce la contraseña para abrir la puerta",
                        key: "mainParagraph",
                    },
                    {
                        type: "text",
                        value: "Introduce la contraseña",
                        key: "submitText",
                    }
                ],
            },
            correctAnswer: 'YouShallNotPass'
        }
    }
];

export { landingRoomObjects };
