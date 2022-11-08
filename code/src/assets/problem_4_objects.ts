import { objectUrls, externalUrls } from "./assets_urls";

require("dotenv").config();

var problem4Objects = [
    // Information objects
    {
        _name: "Problem 4 - Player 1 note",
        id: "problem-4-note-1",
        x: 10,
        y: 7,
        orientation: 0,
        normal: objectUrls.NOTE_NORMAL,
        highlighted: objectUrls.NOTE_HIGHLIGHTED,
        type: 6,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para leer la nota",
        distThreshold: 1,
        properties: {
            message: "En el laboratorio en el que os encontráis se realizan investigaciones con instrumentos tecnológicos de última generación. Durante los últimos meses se ha probado un cohete de despegue vertical. En la última prueba, el cohete despegó desde el suelo en un tiempo t=0 s, se elevó hasta cierta altura (en m), y después volvió al suelo. Debéis averiguar qué función describe la trayectoria del cohete."
        },
    },
    {
        _name: "Problem 4 - Player 2 note",
        id: "problem-4-note-2",
        x: 25,
        y: 5,
        orientation: 0,
        normal: objectUrls.NOTE_NORMAL,
        highlighted: objectUrls.NOTE_HIGHLIGHTED,
        type: 6,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para leer la nota",
        distThreshold: 1,
        properties: {
            message: "En el laboratorio en el que os encontráis se realizan investigaciones con instrumentos tecnológicos de última generación. Durante los últimos meses se ha probado un cohete de despegue vertical. En la última prueba, el cohete despegó desde el suelo en un tiempo t=0 s, se elevó hasta cierta altura (en m), y después volvió al suelo. Debéis averiguar qué función describe la trayectoria del cohete."
        },
    },
    {
        _name: "Problem 4 - Player 3 note",
        id: "problem-4-note-3",
        x: 47,
        y: 7,
        orientation: 0,
        normal: objectUrls.NOTE_NORMAL,
        highlighted: objectUrls.NOTE_HIGHLIGHTED,
        type: 6,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para leer la nota",
        distThreshold: 1,
        properties: {
            message: "En el laboratorio en el que os encontráis se realizan investigaciones con instrumentos tecnológicos de última generación. Durante los últimos meses se ha probado un cohete de despegue vertical. En la última prueba, el cohete despegó desde el suelo en un tiempo t=0 s, se elevó hasta cierta altura (en m), y después volvió al suelo. Debéis averiguar qué función describe la trayectoria del cohete."
        },
    },
    {
        _name: "Problem 4 - Player 1 poster",
        id: "problem-4-poster-1",
        x: 1,
        y: 5,
        orientation: 1,
        normal: objectUrls.POSTER_3X2_NORMAL_1,
        type: 1,
        width: 3,
        height: 2,
        previewMessage: "Pulsa x para observar el poster",
        distThreshold: 1,
        properties: {
            url: externalUrls.PROBLEM_4_GRAPH
        },
    },
    {
        _name: "Problem 4 - Player 2 poster",
        id: "problem-4-poster-2",
        x: 30,
        y: 6,
        orientation: 1,
        normal: objectUrls.POSTER_3X2_NORMAL_2,
        type: 1,
        width: 3,
        height: 2,
        previewMessage: "Pulsa x para observar el poster",
        distThreshold: 1,
        properties: {
            url: externalUrls.PROBLEM_4_FORMULAS_1
        },
    },
    {
        _name: "Problem 4 - Player 3 poster",
        id: "problem-4-poster-3",
        x: 54,
        y: 5,
        orientation: 1,
        normal: objectUrls.POSTER_3X2_NORMAL_2,
        type: 1,
        width: 3,
        height: 2,
        previewMessage: "Pulsa x para observar el poster",
        distThreshold: 1,
        properties: {
            url: externalUrls.PROBLEM_4_FORMULAS_2
        },
    },
    // Computer for answer
    {
        id: "computer-4",
        _name: "Computer - fourth exercise",
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
                        value: "¿Cuál es la altura máxima que alcanzó el cohete durante la prueba, en m? (Respuesta de ejemplo: 100 m)",
                        key: "mainParagraph",
                    },
                    {
                        type: "text",
                        value: "Indica la altura máxima que alcanzó el cohete en m",
                        key: "submitText",
                    }
                ],
            },
            correctAnswer: '625 m'
        },
        x: 48,
        y: 2,
        normal: objectUrls.COMPUTER_FRONT_NORMAL,
        highlighted: objectUrls.COMPUTER_FRONT_HIGHLIGHTED,
        distThreshold: 1,
        orientation: 3,
        width: 1,
        height: 1
    },
    // Doors
    {
        id: "door-4-1",
        _name: "Problem 4 - Player 1 door",
        type: 6,
        normal: objectUrls.DOOR_CLOSED,
        highlighted: objectUrls.DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla",
        x: 15,
        y: 0,
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
        id: "door-4-2",
        _name: "Problem 4 - Player 2 door",
        type: 6,
        normal: objectUrls.DOOR_CLOSED,
        highlighted: objectUrls.DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla",
        x: 28,
        y: 0,
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
        id: "door-4-3",
        _name: "Problem 4 - Player 3 door",
        type: 6,
        normal: objectUrls.DOOR_CLOSED,
        highlighted: objectUrls.DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla",
        x: 41,
        y: 0,
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

export { problem4Objects };
