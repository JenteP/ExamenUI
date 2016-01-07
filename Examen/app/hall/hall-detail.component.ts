/**
 * Created by Jente on 3/01/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {Hall} from "./hall";
import {HallService} from "./hall.service";
import {ItemDetailComponent} from "./../item/item-detail.component";
import {RouteParams,Router} from "angular2/router";
import {HallPointsDirective} from "./hall-points.directive";
import {ViewBoxHelperDirective} from "./viewbox-helper.directive";

@Component({
    selector: 'hall-detail',
    inputs: ['hall'],
    template: `
            <div class="hallDetails" *ngIf="hall">
                <h2>{{hall.name}} details!</h2><h4>Oppervlakte: {{hall.surface}}m²</h4>
                <h4>Aantal items: {{hall.items.length}}</h4>
                <h4>Aantal items met actie vereist: {{hall.itemsRequiringAction.length}}</h4>

                <svg [viewBoxHelper]="halls" [hall]="hall" height="100%" width="100%">
                    <polygon [hallPoints]="hall" [hall]="hall" (click)="onSelect(hall)"/>
                </svg>
            </div>
        `,
    styles: [`
        .hallDetails {
            background-color:#eaeae1;
        }
    `],
    directives: [HallPointsDirective,ViewBoxHelperDirective]
})
export class HallDetailComponent implements OnInit{
    public hall: Hall;
    constructor(private _hallService:HallService,
                private _router:Router,
                private _routeParams:RouteParams) { }

    ngOnInit() {
        let name = this._routeParams.get('name');
        this._hallService.getHall(name).then(hall => this.hall = hall);
    }
}