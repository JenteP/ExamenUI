/**
 * Created by Jente on 4/01/2016.
 */
import {Component} from 'angular2/core';
import {FORM_DIRECTIVES } from 'angular2/common';
import {Action} from "./action";
import {HallService} from "./../hall/hall.service";
import {ActionTypeService} from "./action-type.service";
import {ActionType} from "./action-type";
import {access} from "fs";
import {Input} from "angular2/core";

@Component({
    selector: 'action-detail',
    template: `
            <div class="actionDetails" *ngIf="_action">
                <label for="date">Date</label>
                <input id="date" type="datetime-local" [(ngModel)]="_action.date">

                <label for="type">Type</label>
                <select id="type" [(ngModel)]="_action.type">
                    <option *ngFor="#type of types">{{type}}</option>
                </select>

                <label for="descriptionDetail">Description</label>
                <textarea id="descriptionDetail" [(ngModel)]="_action.description" rows="4" cols="30"></textarea>

            </div>
        `,
    styles: [`
        .actionDetails {
            display:block;
            margin: 0;
            padding: 0.2em;
            border: solid 1px lightgray;
        }

        .detail {
            margin: 0;
            padding: 0.2em;
            width: 96%;
            max-width: 96%;
        }

        input {
            margin: 0;
            padding: 0;
            width: 100%;
            max-width: 100%;
        }

        select {
            margin: 0;
            padding: 0;
            width: 100%;
            max-width: 100%;
        }

        textarea {
            margin: 0;
            padding: 0;
            width: 100%;
            max-width: 100%;
        }
    `],
    providers: [ActionTypeService]
})
export class ActionDetailComponent {
    private _action:Action;
    @Input() set action(action: Action ){
        this._action = action;
    }
    private types: string[];

    constructor(private _hallService: HallService, private _actionTypeService: ActionTypeService) {
        this.types = [];
        //this._actionTypeService.getActionTypes().then(acts => this.setActionTypes(acts));
        this._actionTypeService.getActionTypes().subscribe((actionTypes:ActionType[]) => this.setActionTypes(actionTypes));
    }

    setActionTypes(actionTypes: ActionType[]) {
        for (var i = 0; i < actionTypes.length; i++) {
            this.types.push(actionTypes[i].name);
        }
    }
}