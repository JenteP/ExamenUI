System.register([], function(exports_1) {
    var HALLS;
    return {
        setters:[],
        execute: function() {
            exports_1("HALLS", HALLS = [
                { "name": "Production", "surface": 100,
                    "items": [
                        { "name": "ProductionItem1", "productNumber": "PIT1",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        },
                        { "name": "ProductionItem2", "productNumber": "PIT2",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        },
                        { "name": "ProductionItem2", "productNumber": "PIT2",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        }],
                    "itemsRequiringAction": [
                        { "name": "UnfinishedProductionItem1", "productNumber": "PIT1",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        },
                        { "name": "UnfinishedProductionItem2", "productNumber": "PIT2",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        },
                        { "name": "UnfinishedProductionItem3", "productNumber": "PIT2",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        }],
                    "origin": {
                        "x": 0,
                        "y": 20
                    },
                    "points": [
                        {
                            "x": 60,
                            "y": 0
                        }, {
                            "x": 60,
                            "y": 50
                        }, {
                            "x": 100,
                            "y": 50
                        }, {
                            "x": 100,
                            "y": 80
                        }, {
                            "x": 0,
                            "y": 80
                        }
                    ],
                    "color": "blue",
                    "borderColor": "darkblue",
                    "highLightColor": "lightblue"
                },
                { "name": "Reception", "surface": 200,
                    "items": [
                        { "name": "ReceptionItem1", "productNumber": "RIT1",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        },
                        { "name": "ReceptionItem2", "productNumber": "RIT2",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        }],
                    "itemsRequiringAction": [
                        { "name": "UnfinishedReceptionItem1", "productNumber": "PIT1",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        }],
                    "origin": {
                        "x": 0,
                        "y": 0
                    },
                    "points": [
                        {
                            "x": 30,
                            "y": 0
                        }, {
                            "x": 30,
                            "y": 20
                        }, {
                            "x": 0,
                            "y": 20
                        }
                    ],
                    "color": "red",
                    "borderColor": "darkred",
                    "highLightColor": "pink"
                },
                { "name": "Shipping", "surface": 200,
                    "items": [
                        { "name": "ReceptionItem1", "productNumber": "RIT1",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        },
                        { "name": "ReceptionItem2", "productNumber": "RIT2",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        }],
                    "itemsRequiringAction": [
                        { "name": "UnfinishedReceptionItem1", "productNumber": "PIT1",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        }],
                    "origin": {
                        "x": 30,
                        "y": 0
                    },
                    "points": [
                        {
                            "x": 70,
                            "y": 0
                        }, {
                            "x": 70,
                            "y": 40
                        }, {
                            "x": 30,
                            "y": 40
                        }, {
                            "x": 30,
                            "y": 20
                        }, {
                            "x": 0,
                            "y": 20
                        }
                    ],
                    "color": "green",
                    "borderColor": "darkgreen",
                    "highLightColor": "lightgreen"
                },
                { "name": "Packaging", "surface": 200,
                    "items": [
                        { "name": "ReceptionItem1", "productNumber": "RIT1",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        },
                        { "name": "ReceptionItem2", "productNumber": "RIT2",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        }],
                    "itemsRequiringAction": [
                        { "name": "UnfinishedReceptionItem1", "productNumber": "PIT1",
                            "lastAction": { "description": "last" },
                            "nextAction": { "description": "next" }
                        }],
                    "origin": {
                        "x": 60,
                        "y": 40
                    },
                    "points": [
                        {
                            "x": 40,
                            "y": 0
                        }, {
                            "x": 40,
                            "y": 30
                        }, {
                            "x": 0,
                            "y": 30
                        }
                    ],
                    "color": "yellow",
                    "borderColor": "orange",
                    "highLightColor": "white"
                }
            ]);
        }
    }
});
//# sourceMappingURL=mock-halls.js.map