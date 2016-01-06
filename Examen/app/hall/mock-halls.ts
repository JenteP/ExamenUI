/**
 * Created by Jente on 3/01/2016.
 */
import {Hall} from './hall';

export var HALLS: Hall[] = [
    { "name": "Production", "surface":100,
        "items": [
            {"name":"ProductionItem1", "productNumber":"PIT1",
                "lastAction":{"description":"last"},
                "nextAction":{"description":"next"}
            }
            ,{"name":"ProductionItem2", "productNumber":"PIT2",
                "lastAction":{"description":"last"},
                "nextAction":{"description":"next"}
            }
            ,{"name":"ProductionItem2", "productNumber":"PIT2",
                "lastAction":{"description":"last"},
                "nextAction":{"description":"next"}
            }],
        "itemsRequiringAction": [
            {"name":"UnfinishedProductionItem1", "productNumber":"PIT1",
                "lastAction":{"description":"last"},
                "nextAction":{"description":"next"}
            }
            ,{"name":"UnfinishedProductionItem2", "productNumber":"PIT2",
                "lastAction":{"description":"last"},
                "nextAction":{"description":"next"}
            }
            ,{"name":"UnfinishedProductionItem3", "productNumber":"PIT2",
                "lastAction":{"description":"last"},
                "nextAction":{"description":"next"}
            }],
        "origin":{
            "x":1,
            "y":1
        },
        "points":[]
    },


    { "name": "Reception", "surface":200,
        "items": [
            {"name":"ReceptionItem1", "productNumber":"RIT1",
                "lastAction":{"description":"last"},
                "nextAction":{"description":"next"}
            }
            ,{"name":"ReceptionItem2", "productNumber":"RIT2",
                "lastAction":{"description":"last"},
                "nextAction":{"description":"next"}
            }],
        "itemsRequiringAction": [
            {"name":"UnfinishedReceptionItem1", "productNumber":"PIT1",
                "lastAction":{"description":"last"},
                "nextAction":{"description":"next"}
            }],
        "origin":{
            "x":1,
            "y":1
        },
        "points":[]
    }
];