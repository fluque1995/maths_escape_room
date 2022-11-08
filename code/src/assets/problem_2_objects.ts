import { objectUrls, externalUrls } from "./assets_urls";

require("dotenv").config();

var problem2Objects = [
    // Information objects
    {
        _name: "Problem 2 - Player 1 note",
        id: "problem-2-note-1",
        x: 8,
        y: 4,
        orientation: 0,
        normal: objectUrls.NOTE_NORMAL,
        highlighted: objectUrls.NOTE_HIGHLIGHTED,
        type: 6,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para leer la nota",
        distThreshold: 1,
        properties: {
            message: "A través de las ventanas del edificio podéis ver a un conjunto de personas. Cada uno de vosotros puede ver algunas de ellas. Tened cuidado, porque a algunas de las personas las podéis ver más de uno, pero solo queremos tener en cuenta su información una vez. Sabemos que, en total, hay 9 personas. Necesitamos la media de las alturas de las nueve personas.\\n\\nOJO: Al recopilar la información, os tendréis que poner de acuerdo para no contar a las personas repetidas varias veces."
        },
    },
    {
        _name: "Problem 2 - Player 2 note",
        id: "problem-2-note-2",
        x: 14,
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
            message: "A través de las ventanas del edificio podéis ver a un conjunto de personas. Cada uno de vosotros puede ver algunas de ellas. Tened cuidado, porque a algunas de las personas las podéis ver más de uno, pero solo queremos tener en cuenta su información una vez. Sabemos que, en total, hay 9 personas. Necesitamos la media de las alturas de las nueve personas.\\n\\nOJO: Al recopilar la información, os tendréis que poner de acuerdo para no contar a las personas repetidas varias veces."
        },
    },
    {
        _name: "Problem 2 - Player 3 note",
        id: "problem-2-note-3",
        x: 34,
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
            message: "A través de las ventanas del edificio podéis ver a un conjunto de personas. Cada uno de vosotros puede ver algunas de ellas. Tened cuidado, porque a algunas de las personas las podéis ver más de uno, pero solo queremos tener en cuenta su información una vez. Sabemos que, en total, hay 9 personas. Necesitamos la media de las alturas de las nueve personas.\\n\\nOJO: Al recopilar la información, os tendréis que poner de acuerdo para no contar a las personas repetidas varias veces."
        },
    },
    {
        id: "problem-2-window-1",
        _name: "Problem 2 - player 1 window",
        type: 1,
        normal: objectUrls.WINDOW_HORIZONTAL_NORMAL,
        previewMessage: "Pulsa x para observar la ventana",
        x: 4,
        y: 0,
        width: 2,
        height: 2,
        distThreshold: 1,
        properties: {
            url: externalUrls.PROBLEM_2_WINDOW_1
        }
    },
    {
        id: "problem-2-window-2",
        _name: "Problem 2 - player 2 window",
        type: 1,
        normal: objectUrls.WINDOW_HORIZONTAL_NORMAL,
        previewMessage: "Pulsa x para observar la ventana",
        x: 17,
        y: 0,
        width: 2,
        height: 2,
        distThreshold: 1,
        properties: {
            url: externalUrls.PROBLEM_2_WINDOW_2
        }
    },
    {
        id: "problem-2-window-3",
        _name: "Problem 2 - player 3 window",
        type: 1,
        normal: objectUrls.WINDOW_HORIZONTAL_NORMAL,
        previewMessage: "Pulsa x para observar la ventana",
        x: 31,
        y: 0,
        width: 2,
        height: 2,
        distThreshold: 1,
        properties: {
            url: externalUrls.PROBLEM_2_WINDOW_3
        }
    },
    {
        _name: "Problem 2 - Player 1 calc laptop",
        id: "problem-2-laptop-1",
        x: 8,
        y: 5,
        orientation: 1,
        normal: objectUrls.LAPTOP_LEFT_NORMAL,
        highlighted: objectUrls.LAPTOP_LEFT_HIGHLIGHTED,
        type: 1,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para utilizar el sistema de cálculo",
        distThreshold: 1,
        properties: {
            url: process.env.SPREADSHEET
        },
    },
    {
        _name: "Problem 2 - Player 2 calc laptop",
        id: "problem-2-laptop-2",
        x: 14,
        y: 6,
        orientation: 3,
        normal: objectUrls.LAPTOP_RIGHT_NORMAL,
        highlighted: objectUrls.LAPTOP_RIGHT_HIGHLIGHTED,
        type: 1,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para utilizar el sistema de cálculo",
        distThreshold: 1,
        properties: {
            url: process.env.SPREADSHEET
        },
    },
    {
        _name: "Problem 2 - Player 3 calc laptop",
        id: "problem-2-laptop-3",
        x: 34,
        y: 6,
        orientation: 1,
        normal: objectUrls.LAPTOP_LEFT_NORMAL,
        highlighted: objectUrls.LAPTOP_LEFT_HIGHLIGHTED,
        type: 1,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para utilizar el sistema de cálculo",
        distThreshold: 1,
        properties: {
            url: process.env.SPREADSHEET
        },
    },
    // Computer for answer
    {
        type: 7,
        id: "computer-2",
        _name: "Computer - second exercise",
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
                        value: "¿Cuál es la altura media de la población? (Respuesta de ejemplo: 120 cm)",
                        key: "mainParagraph",
                    },
                    {
                        type: "text",
                        value: "Indica la altura media de la población (en cm).",
                        key: "submitText",
                    }
                ],
            },
            correctAnswer: "174 cm"
        },
        x: 27,
        y: 4,
        normal: objectUrls.COMPUTER_RIGHT_NORMAL,
        highlighted: objectUrls.COMPUTER_RIGHT_HIGHLIGHTED,
        distThreshold: 1,
        orientation: 1,
        width: 1,
        height: 1
    },
    // Doors
    {
        id: "door-2-1",
        _name: "Problem 2 - Player 1 door",
        type: 6,
        normal: objectUrls.DOOR_CLOSED,
        highlighted: objectUrls.DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla",
        x: 2,
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
        id: "door-2-2",
        _name: "Problem 2 - Player 2 door",
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
        id: "door-2-3",
        _name: "Problem 2 - Player 3 door",
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
    }
]

export { problem2Objects };
