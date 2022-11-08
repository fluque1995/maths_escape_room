import { objectUrls, externalUrls } from "./assets_urls";

require("dotenv").config();

var startRoomObjects = [
    // Information objects
    {
        _name: "Explanation room note",
        id: "explanation-room-note",
        x: 9,
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
            message: "¡Oh no! Los espías enemigos te han encerrado a ti y a tus compañeros en esta instalación de máxima seguridad durante vuestra última misión. Debéis salir de aquí cuanto antes. Por suerte, un trabajador infiltrado me ha dado la oportunidad de dejaros algunas pistas y mensajes escritos en forma de notas para ayudaros a salir.\\n\\nAdemás, nos ha llegado información sobre unos documentos que serán de gran ayuda para nuestras próximas misiones, debéis encontrarlos durante vuestro escape, y recopilar toda la información que podáis. Además, es posible que la información que contienen os ayude también a escapar.\\n\\nTu primera misión es salir de esta habitación y localizar a tus compañeros. He conseguido colar unos walkie-talkies con los que os podréis comunicar entre vosotros. No te olvides de coger el tuyo antes de salir de la celda.\\n\\nAhora, intenta escapar de aquí. Seguramente, el ordenador que hay sobre la mesa te pueda dar alguna pista de cómo continuar tu escape. ¡Mucha suerte y nos vemos a la salida!\\n\\nEl profesor."
        },
    },
    {
        _name: "External call walkie",
        id: "external-call-walkie",
        x: 8,
        y: 4,
        orientation: 0,
        normal: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/72Qz2qF4X0Zn30Gt/1k4Xjco6zLVtTZk5oEi5vo",
        highlighted: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/72Qz2qF4X0Zn30Gt/5b57KfNLH6c1jty154mMVC",
        type: 4,
        width: 1,
        height: 1,
        previewMessage: "Pulsa x para coger el walkie-talkie",
        distThreshold: 1,
        properties: {
            zoomLink: process.env.EXTERNAL_CALL!,
        }
    },
    // Computer
    {
        id: "computer-0",
        _name: "Computer - starting room",
        type: 7,
        properties: {
            extensionData: {
                entries: [
                    {
                        type: "header",
                        value: "Apertura de puerta",
                        key: "mainHeader",
                    },
                    {
                        type: "paragraph",
                        value: "Para desbloquear la puerta deberás indicar cuál es la razón trigonométrica que relaciona los lados a y b del triángulo del suelo",
                        key: "mainParagraph",
                    },
                    {
                        type: "text",
                        value: "Indica la razón trigonométrica",
                        key: "submitText",
                    }
                ],
            },
            answerType: 'text',
            correctAnswer: 'tangente'
        },
        x: 8,
        y: 3,
        normal: objectUrls.COMPUTER_LEFT_NORMAL,
        highlighted: objectUrls.COMPUTER_LEFT_HIGHLIGHTED,
        distThreshold: 1,
        orientation: 3,
        width: 1,
        height: 1
    },
    // Door
    {
        id: "door-0",
        _name: "Starting room - door",
        type: 6,
        normal: objectUrls.DOOR_CLOSED,
        highlighted: objectUrls.DOOR_CLOSED,
        previewMessage: "La puerta está bloqueada, buscad la forma de abrirla por la habitación",
        x: 4,
        y: 0,
        width: 2,
        height: 2,
        properties: {
            message: "La puerta está bloqueada, busca la forma de abrirla por la habitación",
            closed: true,
            closedUrl: objectUrls.DOOR_CLOSED,
            openUrl: objectUrls.DOOR_OPEN
        }
    }
];

export { startRoomObjects };
