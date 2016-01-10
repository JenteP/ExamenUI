/**
 * Created by Jente on 3/01/2016.
 */
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers} from 'angular2/http';
import {HALLS} from './mock-halls';
import {Hall} from "./hall";
import {Item} from "../item/item";
import 'rxjs/Rx';

@Injectable()
export class HallService {
    private http:Http = null;
    public static PATH: string = "back-end/halls/";
    private _time:number = 24;

    constructor(http:Http) {
        this.http = http;
    }

    public getHalls():Observable<Hall[]> {
        return this.http.get(HallService.PATH + 'Halls.json')
            .map((res: Response) => res.json());
    }
    /*getHalls():Promise<Hall[]> {
        return Promise.resolve(HALLS);
    }*/
    /*getHallsSlowly() {
        return new Promise<Hall[]>(
            resolve => setTimeout(()=>resolve(HALLS),2000)
        );
    }*/

    public getHall(name: string):Observable<Hall> {
        return this.http.get(HallService.PATH + 'hall/' + name + '.json')
            .map((res: Response) => res.json());
    }

    public postItem(item: Item) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        console.log("Posting:");
        console.log(item);
        try {
            this.http.post('wrong', JSON.stringify(item), {
                    headers: headers
                })
                .map(res => res.json())
                .subscribe(
                    data => this.logData(data.id_token),
                    err => this.logError(err),
                    () => console.log('Authentication Complete')
                );
        } catch (e) {
            console.log("Error caught");
            this.logError(e);
        }
    }

    private logError(error: string) {
        console.log("Error: " + error);
        console.log(error);
    }

    private logData(data: string) {
        console.log("Data: ");
        console.log(data);
    }

    /*getHall(name: string):Promise<Hall> {
        return this.getHalls().then(
            halls =>
                halls.filter(hall => hall.name == name)[0]
            );
    }*/

    /*getHallItems(name: string):Item[] {
        let hallObservable: Observable<Hall> = this.getHall(name);
        hallObservable.subscribe((hall:Hall) => {
            return hall.items;
        });
        return this.getHall(name)..then(
            halls =>
                halls.filter(hall => hall.name == name)[0].items
        );
    }

    getItemFromHall(hallName: string, itemName: string): Observable<Item> {
        return this.getHallItems(hallName).then(
            items => items.filter(item => item.name == itemName)[0]
        );
    }*/

    /*getHallItems(name: string):Promise<Item[]> {
        return this.getHalls().then(
            halls =>
                halls.filter(hall => hall.name == name)[0].items
        );
    }

    getItemFromHall(hallName: string, itemName: string): Promise<Item> {
        return this.getHallItems(hallName).then(
            items => items.filter(item => item.name == itemName)[0]
        );
    }*/

    getActionReminderTimer():Promise<number> {
        return Promise.resolve(this._time);
    }

    setActionReminderTimer(time:number) {
        this._time = time;
    }
}