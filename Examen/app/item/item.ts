import {Action} from "../action/action";
/**
 * Created by Jente on 4/01/2016.
 */
export interface Item {
    name: string;
    productNumber: string;
    lastAction:Action;
    nextAction:Action;
}