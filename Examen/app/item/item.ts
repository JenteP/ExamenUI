import {Action} from "../action/action";
import {Point} from "../point/point";
/**
 * Created by Jente on 4/01/2016.
 */
export interface Item {
    name: string;
    productNumber: string;
    lastAction:Action;
    nextAction:Action;
}