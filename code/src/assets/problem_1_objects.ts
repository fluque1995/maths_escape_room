import { objectUrls, externalUrls } from "./assets_urls";

require("dotenv").config();

var problem1Objects = [
    // Information objects
    {
        id: "problem-1-note-1",
        _name: "Problem 1 - player 1 note",
        type: 6,
        normal: objectUrls.NOTE_NORMAL,
        highlighted: objectUrls.NOTE_HIGHLIGHTED,
        previewMessage: "Pulsa x para leer la nota",
        x: 1,
        y: 12,
        width: 1,
        height: 1,
        distThreshold: 1,
        properties: {
            message: "Los muros del edificio que dan al patio tienen la misma longitud. El perímetro del patio mide 25 m"
        },
    },
    {
        id: "problem-1-note-2",
        _name: "Problem 1 - player 2 note",
        type: 6,
        normal: objectUrls.NOTE_NORMAL,
        highlighted: objectUrls.NOTE_HIGHLIGHTED,
        previewMessage: "Pulsa x para leer la nota",
        x: 14,
        y: 11,
        width: 1,
        height: 1,
        distThreshold: 1,
        properties: {
            message: "La valla exterior del patio mide 5 m menos que cualquiera de los dos muros del edificio."
        },
    },
    {
        id: "problem-1-graph-3",
        _name: "Problem 1 - player 3 diagram",
        type: 1,
        normal: objectUrls.DOCUMENT_NORMAL,
        highlighted: objectUrls.DOCUMENT_HIGHLIGHTED,
        previewMessage: "Pulsa x para observar la baldosa",
        x: 34,
        y: 13,
        width: 1,
        height: 1,
        distThreshold: 1,
        properties: {
            url: externalUrls.PROBLEM_1_GRAPH
        }
    },
    // Computer for answer
    {
        id: "computer-1",
        _name: "Computer - first exercise",
        type: 7,
        properties: {
            extensionData: {
                entries: [
                    {
                        type: "header",
                        value: "Apertura de puertas",
                        key: "mainHeader",
                    },
                    {
                        type: "paragraph",
                        value: "¿Cuánto mide un muro del edificio, expresado en m? (Respuesta de ejemplo: 3 m)",
                        key: "mainParagraph",
                    },
                    {
                        type: "text",
                        value: "Indica la longitud del muro en m",
                        key: "submitText",
                    }
                ],
            },
            correctAnswer: '10 m'
        },
        x: 21,
        y: 12,
        normal: objectUrls.COMPUTER_LEFT_NORMAL,
        highlighted: objectUrls.COMPUTER_LEFT_HIGHLIGHTED,
        distThreshold: 1,
        orientation: 3,
        previewMessage: "Pulsa x para interactuar con el ordenador",
        width: 1,
        height: 1
    },
    // Doors
    {
        id: "door-1-1",
        _name: "Problem 1 - Player 1 door",
        type: 6,
        normal: objectUrls.DOOR_CLOSED,
        highlighted: objectUrls.DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla",
        x: 4,
        y: 8,
        width: 2,
        height: 2,
        properties: {
            message: "La puerta está bloqueada, buscad la forma de abrirla",
            closed: true,
            openUrl: objectUrls.DOOR_OPEN,
            closedUrl: objectUrls.DOOR_CLOSED
        }
    },
    {
        id: "door-1-2",
        _name: "Problem 1 - Player 2 door",
        type: 6,
        normal: objectUrls.DOOR_CLOSED,
        highlighted: objectUrls.DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla",
        x: 17,
        y: 8,
        width: 2,
        height: 2,
        properties: {
            message: "La puerta está bloqueada, buscad la forma de abrirla",
            closed: true,
            openUrl: objectUrls.DOOR_OPEN,
            closedUrl: objectUrls.DOOR_CLOSED
        }
    },
    {
        id: "door-1-3",
        _name: "Problem 1 - Player 3 door",
        type: 6,
        normal: objectUrls.DOOR_CLOSED,
        highlighted: objectUrls.DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla",
        x: 30,
        y: 8,
        width: 2,
        height: 2,
        properties: {
            message: "La puerta está bloqueada, buscad la forma de abrirla",
            closed: true,
            openUrl: objectUrls.DOOR_OPEN,
            closedUrl: objectUrls.DOOR_CLOSED
        }
    }
];

export { problem1Objects };
