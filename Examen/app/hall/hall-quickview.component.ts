/**
 * Created by Jente on 6/01/2016.
 */
import {Component} from 'angular2/core';
import {Hall} from "./hall";
import {HallService} from "./hall.service";
import {ItemDetailComponent} from "./../item/item-detail.component";
import {RouteParams,Router} from "angular2/router";

@Component({
    selector: 'hall-quickview',
    inputs: ['hall'],
    template: `
            <div class="hallQuickView" *ngIf="hall">
                {{hall.name}}:
                <ul>
                    <li>Oppervlakte: {{hall.surface}}m²</li>
                    <li>Aantal items: {{hall.items.length}}</li>
                    <li>Aantal items met actie vereist: {{hall.itemsRequiringAction.length}}</li>
                </ul>
            </div>
        `,
    styles: [`
        .hallQuickView {
            background-color:#eaeae1;
            cursor: pointer;
        }

        li {
            list-style-type: none;
        }
    `]
})
export class HallQuickViewComponent{
    public hall: Hall;
    constructor(private _router:Router,
                private _routeParams:RouteParams) {}
}