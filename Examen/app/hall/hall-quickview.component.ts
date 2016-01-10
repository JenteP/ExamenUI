/**
 * Created by Jente on 6/01/2016.
 */
import {Component} from 'angular2/core';
import {Hall} from "./hall";
import {HallService} from "./hall.service";
import {ItemDetailComponent} from "./../item/item-detail.component";
import {RouteParams,Router} from "angular2/router";
import {Input} from "angular2/core";

@Component({
    selector: 'hall-quickview',
    template: `
            <div class="hallQuickView" *ngIf="_hall">
                <span [style.color]="_hall.color">{{_hall.name}}:</span>
                <ul>
                    <li>Oppervlakte: {{_hall.surface}}m²</li>
                    <li>Aantal items: {{_hall.items.length}}</li>
                </ul>
            </div>
        `,
    styles: [`
        .hallQuickView {
            border:solid 1px #eaeae1;
            cursor: pointer;
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
    }
    constructor(private _router:Router,
                private _routeParams:RouteParams) {

    }
}