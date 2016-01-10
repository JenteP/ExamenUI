System.register([], function(exports_1) {
    var today, tomorrow, yesterday, nextAction, lastDate, nextDate, nextActionDate, HALLS;
    return {
        setters:[],
        execute: function() {
            today = new Date();
            tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 5);
            yesterday = new Date();
            yesterday.setDate(today.getDate() - 1);
            nextAction = new Date();
            //5 hours from now
            nextAction.setTime(nextAction.getTime() + 5 * 60 * 60 * 1000);
            lastDate = yesterday.toISOString().replace('Z', '');
            nextDate = tomorrow.toISOString().replace('Z', '');
            nextActionDate = nextAction.toISOString().replace('Z', '');
            exports_1("HALLS", HALLS = [
                { "name": "Production", "surface": 300,
                    "items": [
                        { "category": "LAMP", "name": "ProductionLamp001",
                            "productNumber": "PLMP001", "description": "A lamp in the production hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextActionDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 10, "y": 10 }
                        }, { "category": "LAMP", "name": "ProductionLamp002",
                            "productNumber": "PLMP002", "description": "A lamp in the production hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 35, "y": 50 }
                        },
                        { "category": "LAMP", "name": "ProductionLamp003",
                            "productNumber": "PLMP003", "description": "A lamp in the production hall",
                            "lastAction": { "date": lastDate, "type": "REPLACEMENT", "description": "Bulb defective" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 80, "y": 60 }
                        },
                        { "category": "BELT", "name": "ProductionBelt001",
                            "productNumber": "PBLT001", "description": "A belt in the production hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextActionDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 20, "y": 40 }
                        },
                        { "category": "BELT", "name": "ProductionBelt002",
                            "productNumber": "PBLT002", "description": "A belt in the production hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextActionDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 40, "y": 60 }
                        },
                        { "category": "MACHINE", "name": "ProductionMachine001",
                            "productNumber": "PMAC001", "description": "A machine in the production hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 60, "y": 60 }
                        }, { "category": "MACHINE", "name": "ProductionMachine002",
                            "productNumber": "PMAC002", "description": "A machine in the production hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 20, "y": 20 }
                        }],
                    "origin": {
                        "x": 0,
                        "y": 20
                    },
                    "points": [
                        {
                            "x": 40,
                            "y": 0
                        }, {
                            "x": 40,
                            "y": 50
                        }, {
                            "x": 100,
                            "y": 50
                        }, {
                            "x": 100,
                            "y": 80
                        }, {
                            "x": 30,
                            "y": 80
                        }, {
                            "x": 30,
                            "y": 50
                        }, {
                            "x": 5,
                            "y": 50
                        }, {
                            "x": 5,
                            "y": 55
                        }, {
                            "x": 0,
                            "y": 55
                        }
                    ],
                    "color": "blue",
                    "borderColor": "darkblue",
                    "highLightColor": "lightblue",
                    "circleRadius": 5
                },
                { "name": "Reception", "surface": 60,
                    "items": [
                        { "category": "LAMP", "name": "ReceptionLamp001",
                            "productNumber": "RLMP001", "description": "A lamp in the reception hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 5, "y": 10 }
                        },
                        { "category": "LAMP", "name": "ReceptionLamp001",
                            "productNumber": "RLMP001", "description": "A lamp in the reception hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextActionDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 25, "y": 10 }
                        },
                        { "category": "MACHINE", "name": "ReceptionMachine001",
                            "productNumber": "RMAC001", "description": "A machine in the reception hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextActionDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 5, "y": 5 }
                        },
                        { "category": "MACHINE", "name": "ReceptionMachine002",
                            "productNumber": "RMAC002", "description": "A machine in the reception hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 25, "y": 5 }
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
                    "highLightColor": "pink",
                    "circleRadius": 2
                },
                { "name": "Shipping", "surface": 200,
                    "items": [
                        { "category": "LAMP", "name": "ShippingLamp001",
                            "productNumber": "SLMP001", "description": "A lamp in the shipping hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 10, "y": 17 }
                        },
                        { "category": "LAMP", "name": "ShippingLamp002",
                            "productNumber": "SLMP002", "description": "A lamp in the shipping hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 40, "y": 17 }
                        },
                        { "category": "LAMP", "name": "ShippingLamp003",
                            "productNumber": "SLMP003", "description": "A lamp in the shipping hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 40, "y": 30 }
                        },
                        { "category": "BELT", "name": "ShippingBelt001",
                            "productNumber": "SBLT001", "description": "A belt in the shipping hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 10, "y": 10 }
                        },
                        { "category": "BELT", "name": "ShippingBelt002",
                            "productNumber": "SBLT002", "description": "A belt in the shipping hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 25, "y": 10 }
                        },
                        { "category": "BELT", "name": "ShippingBelt003",
                            "productNumber": "SBLT003", "description": "A belt in the shipping hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextActionDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 40, "y": 10 }
                        },
                        { "category": "MACHINE", "name": "ShippingMachine001",
                            "productNumber": "SMAC001", "description": "A machine in the shipping hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 50, "y": 3 }
                        },
                        { "category": "MACHINE", "name": "ShippingMachine002",
                            "productNumber": "SMAC002", "description": "A machine in the shipping hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextActionDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 55, "y": 3 }
                        }],
                    "origin": {
                        "x": 40,
                        "y": 0
                    },
                    "points": [
                        {
                            "x": 5,
                            "y": 0
                        }, {
                            "x": 5,
                            "y": 5
                        }, {
                            "x": 15,
                            "y": 5
                        }, {
                            "x": 15,
                            "y": 0
                        }, {
                            "x": 20,
                            "y": 0
                        }, {
                            "x": 20,
                            "y": 5
                        }, {
                            "x": 30,
                            "y": 5
                        }, {
                            "x": 30,
                            "y": 0
                        }, {
                            "x": 35,
                            "y": 0
                        }, {
                            "x": 35,
                            "y": 5
                        }, {
                            "x": 45,
                            "y": 5
                        }, {
                            "x": 45,
                            "y": 0
                        }, {
                            "x": 60,
                            "y": 0
                        }, {
                            "x": 60,
                            "y": 40
                        }, {
                            "x": 20,
                            "y": 40
                        }, {
                            "x": 20,
                            "y": 20
                        }, {
                            "x": 0,
                            "y": 20
                        }
                    ],
                    "color": "green",
                    "borderColor": "darkgreen",
                    "highLightColor": "lightgreen",
                    "circleRadius": 2
                },
                { "name": "Packaging", "surface": 200,
                    "items": [
                        { "category": "LAMP", "name": "PackagingLamp001",
                            "productNumber": "PALMP001", "description": "A lamp in the packaging hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 10, "y": 10 }
                        },
                        { "category": "LAMP", "name": "PackagingLamp002",
                            "productNumber": "PALMP002", "description": "A lamp in the packaging hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 10, "y": 25 }
                        },
                        { "category": "LAMP", "name": "PackagingLamp003",
                            "productNumber": "PALMP003", "description": "A lamp in the packaging hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 30, "y": 25 }
                        },
                        { "category": "LAMP", "name": "PackagingLamp004",
                            "productNumber": "PALMP004", "description": "A lamp in the packaging hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 50, "y": 25 }
                        },
                        { "category": "LAMP", "name": "PackagingLamp005",
                            "productNumber": "PALMP005", "description": "A lamp in the packaging hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 10, "y": 40 }
                        },
                        { "category": "LAMP", "name": "PackagingLamp006",
                            "productNumber": "PALMP006", "description": "A lamp in the packaging hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 30, "y": 40 }
                        },
                        { "category": "LAMP", "name": "PackagingLamp007",
                            "productNumber": "PALMP007", "description": "A lamp in the packaging hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 50, "y": 40 }
                        },
                        { "category": "MACHINE", "name": "PackagingMachine001",
                            "productNumber": "PAMAC001", "description": "A machine in the packaging hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 20, "y": 25 }
                        },
                        { "category": "MACHINE", "name": "PackagingMachine002",
                            "productNumber": "PAMAC002", "description": "A machine in the packaging hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 40, "y": 25 }
                        },
                        { "category": "MACHINE", "name": "PackagingMachine003",
                            "productNumber": "PAMAC003", "description": "A machine in the packaging hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 20, "y": 40 }
                        },
                        { "category": "MACHINE", "name": "PackagingMachine004",
                            "productNumber": "PAMAC004", "description": "A machine in the packaging hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 40, "y": 40 }
                        }],
                    "origin": {
                        "x": 40,
                        "y": 20
                    },
                    "points": [
                        {
                            "x": 20,
                            "y": 0
                        }, {
                            "x": 20,
                            "y": 20
                        }, {
                            "x": 60,
                            "y": 20
                        }, {
                            "x": 60,
                            "y": 50
                        }, {
                            "x": 0,
                            "y": 50
                        }
                    ],
                    "color": "yellow",
                    "borderColor": "orange",
                    "highLightColor": "white",
                    "circleRadius": 2
                },
                { "name": "Hall", "surface": 20,
                    "items": [
                        { "category": "LAMP", "name": "HallLamp001",
                            "productNumber": "HLMP001", "description": "A lamp in the hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 5, "y": 3 }
                        },
                        { "category": "LAMP", "name": "HallLamp002",
                            "productNumber": "HLMP002", "description": "A lamp in the hall",
                            "lastAction": { "date": lastDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "nextAction": { "date": nextActionDate, "type": "MAINTENANCE", "description": "Regular maintenance" },
                            "point": { "x": 5, "y": 17 }
                        }],
                    "origin": {
                        "x": 30,
                        "y": 0
                    },
                    "points": [
                        {
                            "x": 10,
                            "y": 0
                        }, {
                            "x": 10,
                            "y": 20
                        }, {
                            "x": 0,
                            "y": 20
                        }
                    ],
                    "color": "#DF01D7",
                    "borderColor": "#4B088A",
                    "highLightColor": "#BCA9F5",
                    "circleRadius": 2
                }
            ]);
        }
    }
});
//# sourceMappingURL=mock-halls.js.map