import {Item} from "./../item/item";
import {Point} from "../point/point";
/**
 * Created by Jente on 3/01/2016.
 */
export interface Hall {
    name: string;
    surface: number;
    items: Item[];
    itemsRequiringAction: Item[];
    origin: Point;
    points: Point[];
}