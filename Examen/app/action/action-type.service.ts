import {Injectable} from 'angular2/core';
import {ACTIONTYPES} from './mock-action-types';
import {ActionType} from "./action-type";

@Injectable()
export class ActionTypeService {
    getActionTypes():Promise<ActionType[]> {
        return Promise.resolve(ACTIONTYPES);
    }

    getActionType(name: string):Promise<ActionType> {
        return this.getActionTypes().then(
            actionTypes =>
                actionTypes.filter(actionType => actionType.name == name)[0]
        );
    }
}