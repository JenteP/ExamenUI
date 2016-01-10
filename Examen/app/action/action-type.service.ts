import {Injectable} from 'angular2/core';
import {ACTIONTYPES} from './mock-action-types';
import {ActionType} from "./action-type";
import {Observable} from 'rxjs/Observable';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class ActionTypeService {
    private http:Http = null;
    public static PATH: string = "back-end/actions/";

    constructor(http:Http) {
        this.http = http;
    }

    public getActionTypes():Observable<ActionType[]> {
        return this.http.get(ActionTypeService.PATH + 'ActionTypes.json')
            .map((res: Response) => res.json());
    }

    /*
    getActionType(name: string):Promise<ActionType> {
        return Promise.resolve(this.getActionTypes().then(
            actionTypes =>
                actionTypes.filter(actionType => actionType.name == name)[0]
        ));
    }*/
    /*getActionTypes():Promise<ActionType[]> {
        return Promise.resolve(ACTIONTYPES);
    }

    getActionType(name: string):Promise<ActionType> {
        return this.getActionTypes().then(
            actionTypes =>
                actionTypes.filter(actionType => actionType.name == name)[0]
        );
    }*/
}