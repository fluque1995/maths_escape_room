import { roomIds } from "../../config";

var portals = [
    {
        mapId: roomIds['explanation_room'],
        portals: [
            {
                "x": 2,
                "y": 2,
                "targetMap": roomIds['first_room_1'],
                "targetX": 8,
                "targetY": 8
            },
            {
                "x": 7,
                "y": 2,
                "targetMap": roomIds['first_room_2'],
                "targetX": 8,
                "targetY": 8
            },
            {
                "x": 12,
                "y": 2,
                "targetMap": roomIds['first_room_3'],
                "targetX": 8,
                "targetY": 8
            },
            {
                "x": 23,
                "y": 5,
                "targetMap": roomIds['outside'],
                "targetX": 27,
                "targetY": 8
            }
        ],
    },
    {
        mapId: roomIds['first_room_1'],
        portals: [
            {
                "x": 4,
                "y": 0,
                "targetMap": roomIds['problems_1_2'],
                "targetX": 4,
                "targetY": 16
            },
            {
                "x": 5,
                "y": 0,
                "targetMap": roomIds['problems_1_2'],
                "targetX": 5,
                "targetY": 16
            }
        ]
    },
    {
        mapId: roomIds['first_room_2'],
        portals: [
            {
                "x": 4,
                "y": 0,
                "targetMap": roomIds['problems_1_2'],
                "targetX": 17,
                "targetY": 16
            },
            {
                "x": 5,
                "y": 0,
                "targetMap": roomIds['problems_1_2'],
                "targetX": 18,
                "targetY": 16
            }
        ]
    },
    {
        mapId: roomIds['first_room_3'],
        portals: [
            {
                "x": 4,
                "y": 0,
                "targetMap": roomIds['problems_1_2'],
                "targetX": 30,
                "targetY": 16
            },
            {
                "x": 5,
                "y": 0,
                "targetMap": roomIds['problems_1_2'],
                "targetX": 31,
                "targetY": 16
            }
        ]
    },
    {
        mapId: roomIds['problems_1_2'],
        portals: [
            {
                "x": 4,
                "y": 17,
                "targetMap": roomIds['first_room_1'],
                "targetX": 4,
                "targetY": 1
            },
            {
                "x": 5,
                "y": 17,
                "targetMap": roomIds['first_room_1'],
                "targetX": 5,
                "targetY": 1
            },
            {
                "x": 17,
                "y": 17,
                "targetMap": roomIds['first_room_2'],
                "targetX": 4,
                "targetY": 1
            },
            {
                "x": 18,
                "y": 17,
                "targetMap": roomIds['first_room_2'],
                "targetX": 5,
                "targetY": 1
            },
            {
                "x": 30,
                "y": 17,
                "targetMap": roomIds['first_room_3'],
                "targetX": 4,
                "targetY": 1
            },
            {
                "x": 31,
                "y": 17,
                "targetMap": roomIds['first_room_3'],
                "targetX": 5,
                "targetY": 1
            },
            {
                "x": 2,
                "y": 0,
                "targetMap": roomIds['problems_3_4'],
                "targetX": 15,
                "targetY": 9
            },
            {
                "x": 3,
                "y": 0,
                "targetMap": roomIds['problems_3_4'],
                "targetX": 16,
                "targetY": 9
            },
            {
                "x": 15,
                "y": 0,
                "targetMap": roomIds['problems_3_4'],
                "targetX": 28,
                "targetY": 21
            },
            {
                "x": 16,
                "y": 0,
                "targetMap": roomIds['problems_3_4'],
                "targetX": 29,
                "targetY": 21
            },
            {
                "x": 28,
                "y": 0,
                "targetMap": roomIds['problems_3_4'],
                "targetX": 41,
                "targetY": 9
            },
            {
                "x": 29,
                "y": 0,
                "targetMap": roomIds['problems_3_4'],
                "targetX": 42,
                "targetY": 9
            },
        ]
    },
    {
        mapId: roomIds['problems_3_4'],
        portals: [
            {
                "x": 15,
                "y": 10,
                "targetMap": roomIds['problems_1_2'],
                "targetX": 2,
                "targetY": 1
            },
            {
                "x": 16,
                "y": 10,
                "targetMap": roomIds['problems_1_2'],
                "targetX": 3,
                "targetY": 1
            },
            {
                "x": 28,
                "y": 22,
                "targetMap": roomIds['problems_1_2'],
                "targetX": 15,
                "targetY": 1
            },
            {
                "x": 29,
                "y": 22,
                "targetMap": roomIds['problems_1_2'],
                "targetX": 16,
                "targetY": 1
            },
            {
                "x": 41,
                "y": 10,
                "targetMap": roomIds['problems_1_2'],
                "targetX": 28,
                "targetY": 1
            },
            {
                "x": 42,
                "y": 10,
                "targetMap": roomIds['problems_1_2'],
                "targetX": 29,
                "targetY": 1
            },
            {
                "x": 15,
                "y": 0,
                "targetMap": roomIds['problem_5'],
                "targetX": 5,
                "targetY": 20
            },
            {
                "x": 16,
                "y": 0,
                "targetMap": roomIds['problem_5'],
                "targetX": 6,
                "targetY": 20
            },
            {
                "x": 28,
                "y": 0,
                "targetMap": roomIds['problem_5'],
                "targetX": 20,
                "targetY": 20
            },
            {
                "x": 29,
                "y": 0,
                "targetMap": roomIds['problem_5'],
                "targetX": 21,
                "targetY": 20
            },
            {
                "x": 41,
                "y": 0,
                "targetMap": roomIds['problem_5'],
                "targetX": 35,
                "targetY": 20
            },
            {
                "x": 42,
                "y": 0,
                "targetMap": roomIds['problem_5'],
                "targetX": 36,
                "targetY": 20
            },
        ]
    },
    {
        mapId: roomIds['problem_5'],
        portals: [
            {
                "x": 5,
                "y": 21,
                "targetMap": roomIds['problems_3_4'],
                "targetX": 15,
                "targetY": 1,
            },
            {
                "x": 6,
                "y": 21,
                "targetMap": roomIds['problems_3_4'],
                "targetX": 16,
                "targetY": 1,
            },
            {
                "x": 20,
                "y": 21,
                "targetMap": roomIds['problems_3_4'],
                "targetX": 28,
                "targetY": 1
            },
            {
                "x": 21,
                "y": 21,
                "targetMap": roomIds['problems_3_4'],
                "targetX": 29,
                "targetY": 1
            },
            {
                "x": 35,
                "y": 21,
                "targetMap": roomIds['problems_3_4'],
                "targetX": 41,
                "targetY": 1
            },
            {
                "x": 36,
                "y": 21,
                "targetMap": roomIds['problems_3_4'],
                "targetX": 42,
                "targetY": 1
            },
            {
                "x": 19,
                "y": 0,
                "targetMap": roomIds['outside'],
                "targetX": 25,
                "targetY": 29
            },
            {
                "x": 20,
                "y": 0,
                "targetMap": roomIds['outside'],
                "targetX": 26,
                "targetY": 29
            },
            {
                "x": 21,
                "y": 0,
                "targetMap": roomIds['outside'],
                "targetX": 27,
                "targetY": 29
            },
            {
                "x": 22,
                "y": 0,
                "targetMap": roomIds['outside'],
                "targetX": 28,
                "targetY": 29
            },
        ]
    },
    {
        mapId: roomIds['outside'],
        portals: [
            {
                "x": 25,
                "y": 30,
                "targetMap": roomIds['problem_5'],
                "targetX": 19,
                "targetY": 1
            },
            {
                "x": 26,
                "y": 30,
                "targetMap": roomIds['problem_5'],
                "targetX": 20,
                "targetY": 1
            },
            {
                "x": 27,
                "y": 30,
                "targetMap": roomIds['problem_5'],
                "targetX": 21,
                "targetY": 1
            },
            {
                "x": 28,
                "y": 30,
                "targetMap": roomIds['problem_5'],
                "targetX": 22,
                "targetY": 1
            },
            {
                "x": 29,
                "y": 30,
                "targetMap": roomIds['problem_5'],
                "targetX": 22,
                "targetY": 1
            },
        ]
    }
]

export { portals };
