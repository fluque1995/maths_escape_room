import { objectUrls, externalUrls } from "./assets_urls";

require("dotenv").config();

var problem3Objects = [
    // Information objects
    {
        _name: "Problem 3 - Player 1 note",
        id: "problem-3-note-1",
        x: 13,
        y: 9,
        orientation: 0,
        normal: objectUrls.NOTE_NORMAL,
        highlighted: objectUrls.NOTE_HIGHLIGHTED,
        type: 6,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para leer la nota",
        distThreshold: 1,
        properties: {
            message: "Uno de los espías del enemigo ha sido enviado en una misión secreta a visitar algunos de los edificios del gobierno. Para continuar, debéis trazar la ruta seguida por el espía a partir de las instrucciones que tenéis disponibles. El espía salió desde el edificio en el que os encontráis y volvió al mismo después de recorrer las demás localizaciones. La contraseña que os permitirá abrir la puerta es el área de la figura que aparece al trazar la ruta del espía por los distintos edificios. Podéis utilizar el sistema de dibujo de la sala para resolver este problema."
        },
    },
    {
        _name: "Problem 3 - Player 2 note",
        id: "problem-3-note-2",
        x: 32,
        y: 18,
        orientation: 0,
        normal: objectUrls.NOTE_NORMAL,
        highlighted: objectUrls.NOTE_HIGHLIGHTED,
        type: 6,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para leer la nota",
        distThreshold: 1,
        properties: {
            message: "Uno de los espías del enemigo ha sido enviado en una misión secreta a visitar algunos de los edificios del gobierno. Para continuar, debéis trazar la ruta seguida por el espía a partir de las instrucciones que tenéis disponibles. El espía salió desde el edificio en el que os encontráis y volvió al mismo después de recorrer las demás localizaciones. La contraseña que os permitirá abrir la puerta es el área de la figura que aparece al trazar la ruta del espía por los distintos edificios. Podéis utilizar el sistema de dibujo de la sala para resolver este problema."
        },
    },
    {
        _name: "Problem 3 - Player 3 note",
        id: "problem-3-note-3",
        x: 45,
        y: 8,
        orientation: 0,
        normal: objectUrls.NOTE_NORMAL,
        highlighted: objectUrls.NOTE_HIGHLIGHTED,
        type: 6,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para leer la nota",
        distThreshold: 1,
        properties: {
            message: "Uno de los espías del enemigo ha sido enviado en una misión secreta a visitar algunos de los edificios del gobierno. Para continuar, debéis trazar la ruta seguida por el espía a partir de las instrucciones que tenéis disponibles. El espía salió desde el edificio en el que os encontráis y volvió al mismo después de recorrer las demás localizaciones. La contraseña que os permitirá abrir la puerta es el área de la figura que aparece al trazar la ruta del espía por los distintos edificios. Podéis utilizar el sistema de dibujo de la sala para resolver este problema."
        },
    },
    {
        _name: "Problem 3 - Player 1 document",
        id: "problem-3-document-1",
        x: 13,
        y: 2,
        orientation: 0,
        normal: objectUrls.DOCUMENT_NORMAL,
        highlighted: objectUrls.DOCUMENT_HIGHLIGHTED,
        type: 6,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para leer el documento",
        distThreshold: 1,
        properties: {
            message: "A continuación, desde el hospital se desplazó hasta una base secreta, situada a 4 km al norte.\\n\\nDesde el aeropuerto, se desplazó 3 km hacia el este para llegar al hospital.\\n\\nLuego, caminó 6 km hacia el sur para llegar a la estación de comunicaciones desde la estación espacial."
        },
    },
    {
        _name: "Problem 3 - Player 3 document",
        id: "problem-3-document-3",
        x: 38,
        y: 5,
        orientation: 0,
        normal: objectUrls.DOCUMENT_NORMAL,
        highlighted: objectUrls.DOCUMENT_HIGHLIGHTED,
        type: 6,
        width: 2,
        height: 2,
        previewMessage: "Pulsa x para leer el documento",
        distThreshold: 1,
        properties: {
            message: "Finalmente, recorrió 5 km hacia el oeste desde la estación de comunicaciones para volver a estas instalaciones.\\n\\nDesde la base secreta viajó 2 km al este para llegar a la estación espacial.\\n\\nEn primer lugar, el espía salió de estas instalaciones y recorrió 2 km hacia el norte, hacia el aeropuerto."
        },
    },
    {
        _name: "Problem 3 - Player 1 GGB client",
        id: "problem-3-ggb-1",
        x: 19,
        y: 6,
        orientation: 0,
        normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FcOfR0RQgS21MC7NA?alt=media&token=67d278e4-9064-4ddd-9dae-d275ee93e2d1",
        highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FQlfxZBwYHz9Oy5Lo?alt=media&token=6197a714-bcf2-4ae8-bb0a-2b2d24b7e40d",
        type: 1,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para observar el sistema de dibujo",
        distThreshold: 1,
        properties: {
            url: process.env.GEOGEBRA_RESTRICTED_CLIENT
        },
    },
    {
        _name: "Problem 3 - Player 2 GGB server",
        id: "problem-3-ggb-2",
        x: 25,
        y: 15,
        orientation: 0,
        normal: objectUrls.POSTER_2X2_NORMAL,
        highlighted: objectUrls.POSTER_2X2_HIGHLIGHTED,
        type: 1,
        width: 2,
        height: 2,
        previewMessage: "Pulsa x para utilizar el sistema de dibujo",
        distThreshold: 1,
        properties: {
            url: process.env.GEOGEBRA_RESTRICTED_SERVER
        },
    },
    {
        _name: "Problem 3 - Player 3 GGB client",
        id: "problem3-ggb-3",
        x: 43,
        y: 4,
        orientation: 0,
        normal: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FcOfR0RQgS21MC7NA?alt=media&token=67d278e4-9064-4ddd-9dae-d275ee93e2d1",
        highlighted: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FQlfxZBwYHz9Oy5Lo?alt=media&token=6197a714-bcf2-4ae8-bb0a-2b2d24b7e40d",
        type: 1,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para observar el sistema de dibujo",
        distThreshold: 1,
        properties: {
            url: process.env.GEOGEBRA_RESTRICTED_CLIENT
        },
    },
    // Computer for answer
    {
        id: "computer-3",
        _name: "Computer - third exercise",
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
                        value: "¿Cuál es el área de la figura que se forma al pintar el recorrido del espía en el sistema de dibujo? Expresa el resultado en metros cuadrados. (Respuesta de ejemplo: 5 metros cuadrados)",
                        key: "mainParagraph",
                    },
                    {
                        type: "text",
                        value: "Introduce el área de la figura en metros cuadrados",
                        key: "submitText",
                    }
                ],
            },
            correctAnswer: '18 metros cuadrados'
        },
        x: 19,
        y: 4,
        normal: objectUrls.COMPUTER_LEFT_NORMAL,
        highlighted: objectUrls.COMPUTER_LEFT_HIGHLIGHTED,
        distThreshold: 1,
        orientation: 3,
        width: 1,
        height: 1
    },
    {
        id: "door-3-1",
        _name: "Problem 3 - Player 1 door",
        type: 6,
        normal: objectUrls.VERTICAL_DOOR_CLOSED,
        highlighted: objectUrls.VERTICAL_DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla",
        x: 11,
        y: 3,
        width: 1,
        height: 3,
        properties: {
            message: "La puerta está bloqueada, busca la forma de abrirla",
            closed: true,
            openUrl: objectUrls.VERTICAL_DOOR_OPEN,
            closedUrl: objectUrls.VERTICAL_DOOR_CLOSED
        }
    },
    {
        id: "door-3-2",
        _name: "problem 3 - Player 2 door",
        type: 6,
        normal: objectUrls.DOOR_CLOSED,
        highlighted: objectUrls.DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla",
        x: 28,
        y: 11,
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
        id: "door-3-3",
        _name: "Problem 3 - Player 3 door",
        type: 6,
        normal: objectUrls.VERTICAL_DOOR_CLOSED,
        highlighted: objectUrls.VERTICAL_DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla",
        x: 46,
        y: 3,
        width: 1,
        height: 3,
        properties: {
            message: "La puerta está bloqueada, busca la forma de abrirla",
            closed: true,
            openUrl: objectUrls.VERTICAL_DOOR_OPEN,
            closedUrl: objectUrls.VERTICAL_DOOR_CLOSED
        }
    },
];

export { problem3Objects };
