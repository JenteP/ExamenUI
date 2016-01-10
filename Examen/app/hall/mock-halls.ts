/**
 * Created by Jente on 3/01/2016.
 */
import {Hall} from './hall';
import {Category} from '../item/category';
import {ActionType} from "../action/action-type";

var today:Date = new Date();
var tomorrow:Date = new Date();
tomorrow.setDate(today.getDate() + 5);
var yesterday:Date = new Date();
yesterday.setDate(today.getDate() - 1);
var nextAction:Date = new Date();
//5 hours from now
nextAction.setTime(nextAction.getTime() + 5*60*60*1000);
var lastDate: string = yesterday.toISOString().replace('Z', '');
var nextDate: string = tomorrow.toISOString().replace('Z', '');
var nextActionDate:string = nextAction.toISOString().replace('Z', '');

export var HALLS: Hall[] = [
    { "name": "Production", "surface":300,
        "items": [
            {"category":"LAMP","name":"ProductionLamp001",
                "productNumber":"PLMP001", "description":"A freakin lamp",
                "lastAction":{"date":lastDate,"type":"MAINTENANCE","description":"last"},
                "nextAction":{"date":nextActionDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":10,"y":10}
            }
            ,{"category":"BELT","name":"ProductionBelt001",
                "productNumber":"PBND001", "description":"A freakin band",
                "lastAction":{"date":lastDate,"type":"MAINTENANCE","description":"last"},
                "nextAction":{"date":nextActionDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":20,"y":50}
            }
            ,{"category":"LAMP","name":"ProductionLamp002",
                "productNumber":"PLMP002", "description":"A freakin lamp",
                "lastAction":{"date":lastDate,"type":"MAINTENANCE","description":"last"},
                "nextAction":{"date":nextDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":10,"y":70}
            },
            {"category":"LAMP","name":"ProductionLamp003",
                "productNumber":"PLMP003", "description":"A freakin lamp",
                "lastAction":{"date":lastDate,"type":"REPLACEMENT","description":"last"},
                "nextAction":{"date":nextDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":80,"y":60}
            }
            ,{"category":"MACHINE","name":"ProductionMachine001",
                "productNumber":"PMAC001", "description":"A freakin machine",
                "lastAction":{"date":lastDate,"type":"MAINTENANCE","description":"last"},
                "nextAction":{"date":nextDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":40,"y":60}
            }],
        "origin":{
            "x":0,
            "y":20
        },
        "points":[
            {
                "x":40,
                "y":0
            },{
                "x":40,
                "y":50
            },{
                "x":100,
                "y":50
            },{
                "x":100,
                "y":80
            },{
                "x":30,
                "y":80
            },{
                "x":30,
                "y":50
            },{
                "x":5,
                "y":50
            },{
                "x":5,
                "y":55
            },{
                "x":0,
                "y":55
            }
        ],
        "color":"blue",
        "borderColor":"darkblue",
        "highLightColor":"lightblue",
        "circleRadius":5
    },

    { "name": "Reception", "surface":60,
        "items": [
            {"category":"LAMP","name":"ProductionLamp",
                "productNumber":"PLMP001", "description":"A freakin lamp",
                "lastAction":{"date":lastDate,"type":"MAINTENANCE","description":"last"},
                "nextAction":{"date":nextDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":10,"y":10}
            },
            {"category":"LAMP","name":"ProductionLamp",
                "productNumber":"PLMP001", "description":"A freakin lamp",
                "lastAction":{"date":lastDate,"type":"MAINTENANCE","description":"last"},
                "nextAction":{"date":nextDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":20,"y":10}
            }],
        "origin":{
            "x":0,
            "y":0
        },
        "points":[
            {
                "x":30,
                "y":0
            },{
                "x":30,
                "y":20
            },{
                "x":0,
                "y":20
            }
        ],
        "color":"red",
        "borderColor":"darkred",
        "highLightColor":"pink",
        "circleRadius":2
    },


    { "name": "Shipping", "surface":200,
        "items": [
            {"category":"LAMP","name":"ProductionLamp",
                "productNumber":"PLMP001", "description":"A freakin lamp",
                "lastAction":{"date":lastDate,"type":"MAINTENANCE","description":"last"},
                "nextAction":{"date":nextDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":10,"y":10}
            },
            {"category":"LAMP","name":"ProductionLamp",
                "productNumber":"PLMP001", "description":"A freakin lamp",
                "lastAction":{"date":lastDate,"type":"MAINTENANCE","description":"last"},
                "nextAction":{"date":nextDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":60,"y":10}
            },
            {"category":"LAMP","name":"ProductionLamp",
                "productNumber":"PLMP003", "description":"A freakin lamp",
                "lastAction":{"date":lastDate,"type":"MAINTENANCE","description":"last"},
                "nextAction":{"date":nextDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":50,"y":30}
            }],
        "origin":{
            "x":40,
            "y":0
        },
        "points":[
            {
                "x":5,
                "y":0
            },{
                "x":5,
                "y":5
            },{
                "x":15,
                "y":5
            },{
                "x":15,
                "y":0
            },{
                "x":20,
                "y":0
            },{
                "x":20,
                "y":5
            },{
                "x":30,
                "y":5
            },{
                "x":30,
                "y":0
            },{
                "x":35,
                "y":0
            },{
                "x":35,
                "y":5
            },{
                "x":45,
                "y":5
            },{
                "x":45,
                "y":0
            },{
                "x":60,
                "y":0
            },{
                "x":60,
                "y":40
            },{
                "x":20,
                "y":40
            },{
                "x":20,
                "y":20
            },{
                "x":0,
                "y":20
            }
        ],
        "color":"green",
        "borderColor":"darkgreen",
        "highLightColor":"lightgreen",
        "circleRadius":5
    },


    { "name": "Packaging", "surface":200,
        "items": [
            {"category":"LAMP","name":"ProductionLamp",
                "productNumber":"PLMP001", "description":"A freakin lamp",
                "lastAction":{"date":lastDate,"type":"MAINTENANCE","description":"last"},
                "nextAction":{"date":nextDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":10,"y":10}
            },
            {"category":"LAMP","name":"ProductionLamp",
                "productNumber":"PLMP001", "description":"A freakin lamp",
                "lastAction":{"date":lastDate,"type":"MAINTENANCE","description":"last"},
                "nextAction":{"date":nextDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":30,"y":20}
            }],
        "origin":{
            "x":40,
            "y":20
        },
        "points":[
            {
                "x":20,
                "y":0
            },{
                "x":20,
                "y":20
            },{
                "x":60,
                "y":20
            },{
                "x":60,
                "y":50
            },{
                "x":0,
                "y":50
            }
        ],
        "color":"yellow",
        "borderColor":"orange",
        "highLightColor":"white",
        "circleRadius":2
    },


    { "name": "Hall", "surface":20,
        "items": [
            {"category":"LAMP","name":"ProductionLamp",
                "productNumber":"PLMP001", "description":"A freakin lamp",
                "lastAction":{"date":lastDate,"type":"MAINTENANCE","description":"last"},
                "nextAction":{"date":nextDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":10,"y":10}
            },
            {"category":"LAMP","name":"ProductionLamp",
                "productNumber":"PLMP001", "description":"A freakin lamp",
                "lastAction":{"date":lastDate,"type":"MAINTENANCE","description":"last"},
                "nextAction":{"date":nextDate,"type":"MAINTENANCE","description":"next"},
                "point":{"x":30,"y":20}
            }],
        "origin":{
            "x":30,
            "y":0
        },
        "points":[
            {
                "x":10,
                "y":0
            },{
                "x":10,
                "y":20
            },{
                "x":0,
                "y":20
            }
        ],
        "color":"#DF01D7",
        "borderColor":"#4B088A",
        "highLightColor":"#BCA9F5",
        "circleRadius":2
    }
];