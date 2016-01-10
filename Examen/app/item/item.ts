import {Action} from "../action/action";
import {Point} from "../point/point";
import {Category} from "./category";
/**
 * Created by Jente on 4/01/2016.
 */
export interface Item {
    category:string;
    name: string;
    productNumber: string;
    description:string;
    lastAction:Action;
    nextAction:Action;
    point:Point;
}