/**
 * Created by Jente on 6/01/2016.
 */
import {Component} from 'angular2/core';
import {Hall} from "./hall";
import {HallService} from "./hall.service";
import {ItemDetailComponent} from "./../item/item-detail.component";
import {RouteParams,Router} from "angular2/router";
import {Input} from "angular2/core";
import {Item} from "../item/item";

@Component({
    selector: 'hall-quickview',
    template: `
            <div class="hallQuickView" *ngIf="_hall">
                <span [style.color]="_hall.color">{{_hall.name}}:</span>
                <ul>
                    <li>Oppervlakte: {{_hall.surface}}m²</li>
                    <li>Aantal items: {{_hall.items.length}}</li>
                    <li *ngIf="itemsWithAction">Aantal items met actie: {{itemsWithAction.length}}</li>
                </ul>
            </div>
        `,
    styles: [`
        .hallQuickView {
            border:solid 1px #eaeae1;
            cursor: pointer;
        }

        .hallQuickView:hover {
            background-color: lightgray;
            color: white;
        }

        li {
            list-style-type: none;
        }
    `]
})
export class HallQuickViewComponent{
    private _hall: Hall;
    @Input() set hall(hall:Hall) {
        this._hall = hall;
        this.defineItemsWithAction();
    }
    private itemsWithAction:Item[];
    private time:number;

    constructor(private _hallService: HallService,
                private _router:Router,
                private _routeParams:RouteParams) {

    }

    defineItemsWithAction() {
        this._hallService.getActionReminderTimer().then(time =>
        {
            this.time = time;
            this.getItemsWithAction(this._hall);
        });
    }

    getItemsWithAction(hall: Hall) {
        if (hall != null) {
            this.itemsWithAction = [];
            var upperDate:Date = this.getUpperDate();
            for (var i = 0; i < hall.items.length; i++) {
                var itemDate:Date = new Date(hall.items[i].nextAction.date);
                if (itemDate < upperDate) {
                    this.itemsWithAction.push(hall.items[i]);
                }
            }
        }
    }

    getUpperDate():Date {
        var date = new Date();
        var milisToAdd = this.time*60*60*1000;
        date.setTime(date.getTime() + milisToAdd);
        return date;
    }
}