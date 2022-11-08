import { objectUrls, externalUrls } from "./assets_urls";

require("dotenv").config();

var problem5Objects = [
    // Information objects
    {
        _name: "Problem 5 - Player 1 document",
        id: "problem-5-document-1",
        x: 9,
        y: 16,
        orientation: 0,
        normal: objectUrls.DOCUMENT_NORMAL,
        highlighted: objectUrls.DOCUMENT_HIGHLIGHTED,
        type: 1,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para ver el documento",
        distThreshold: 2,
        properties: {
            url: externalUrls.PROBLEM_5_DOCUMENT_1
        },
    },
    {
        _name: "Problem 5 - Player 2 document",
        id: "problem-5-document-2",
        x: 18,
        y: 16,
        orientation: 0,
        normal: objectUrls.DOCUMENT_NORMAL,
        highlighted: objectUrls.DOCUMENT_HIGHLIGHTED,
        type: 1,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para ver el documento",
        distThreshold: 2,
        properties: {
            url: externalUrls.PROBLEM_5_DOCUMENT_2
        },
    },
    {
        _name: "Problem 5 - Player 3 document",
        id: "problem-5-document-3",
        x: 38,
        y: 16,
        orientation: 0,
        normal: objectUrls.DOCUMENT_NORMAL,
        highlighted: objectUrls.DOCUMENT_HIGHLIGHTED,
        type: 1,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para ver el documento",
        distThreshold: 2,
        properties: {
            url: externalUrls.PROBLEM_5_DOCUMENT_3
        },
    },
    // Computer for answer
    {
        id: 'computer-5',
        _name: "Computer - fifth exercise",
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
                        value: "¿Cuál es el código que abre las puertas?",
                        key: "mainParagraph",
                    },
                    {
                        type: "text",
                        value: "Indica el código de apertura de puertas",
                        key: "submitText",
                    }
                ],
            },
            correctAnswer: "CAB"
        },
        x: 18,
        y: 12,
        normal: objectUrls.COMPUTER_FRONT_NORMAL,
        highlighted: objectUrls.COMPUTER_FRONT_HIGHLIGHTED,
        distThreshold: 1,
        orientation: 0,
        width: 1,
        height: 1
    },
    // Doors
    {
        id: "door-5-1",
        _name: "Problem 5 - Player 1 door",
        type: 6,
        normal: objectUrls.DOOR_CLOSED,
        highlighted: objectUrls.DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla",
        x: 5,
        y: 10,
        width: 2,
        height: 2,
        properties: {
            message: "La puerta está bloqueada, busca la forma de abrirla",
            closed: true,
            openUrl: objectUrls.DOOR_OPEN,
            closedUrl: objectUrls.DOOR_CLOSED
        }
    },
    {
        id: "door-5-2",
        _name: "Problem 5 - Player 2 door",
        type: 6,
        normal: objectUrls.DOOR_CLOSED,
        highlighted: objectUrls.DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla",
        x: 20,
        y: 10,
        width: 2,
        height: 2,
        properties: {
            message: "La puerta está bloqueada, busca la forma de abrirla",
            closed: true,
            openUrl: objectUrls.DOOR_OPEN,
            closedUrl: objectUrls.DOOR_CLOSED
        }
    },
    {
        id: "door-5-3",
        _name: "Problem 5 - Player 3 door",
        type: 6,
        normal: objectUrls.DOOR_CLOSED,
        highlighted: objectUrls.DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla",
        x: 35,
        y: 10,
        width: 2,
        height: 2,
        properties: {
            message: "La puerta está bloqueada, busca la forma de abrirla",
            closed: true,
            openUrl: objectUrls.DOOR_OPEN,
            closedUrl: objectUrls.DOOR_CLOSED
        }
    }
];

export { problem5Objects };
