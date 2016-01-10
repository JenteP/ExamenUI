/**
 * Created by Jente on 3/01/2016.
 */
import {Injectable} from 'angular2/core';
import {HALLS} from './mock-halls';
import {Hall} from "./hall";
import {Item} from "../item/item";

@Injectable()
export class HallService {
    private _time:number = 24;

    getHalls():Promise<Hall[]> {
        return Promise.resolve(HALLS);
    }
    getHallsSlowly() {
        return new Promise<Hall[]>(
            resolve => setTimeout(()=>resolve(HALLS),2000)
        );
    }

    getHall(name: string):Promise<Hall> {
        return this.getHalls().then(
            halls =>
                halls.filter(hall => hall.name == name)[0]
            );
    }

    getHallItems(name: string):Promise<Item[]> {
        return this.getHalls().then(
            halls =>
                halls.filter(hall => hall.name == name)[0].items
        );
    }

    getItemFromHall(hallName: string, itemName: string): Promise<Item> {
        return this.getHallItems(hallName).then(
            items => items.filter(item => item.name == itemName)[0]
        );
    }

    getActionReminderTimer():Promise<number> {
        return Promise.resolve(this._time);
    }

    setActionReminderTimer(time:number) {
        this._time = time;
    }
}