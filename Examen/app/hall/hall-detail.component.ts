/**
 * Created by Jente on 3/01/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {Hall} from "./hall";
import {HallService} from "./hall.service";
import {RouteParams,Router} from "angular2/router";
import {HallPointsDirective} from "./hall-points.directive";
import {} from '../item/item-circle.directive';
import {ViewBoxHelperDirective} from "./viewbox-helper.directive";
import {ItemCircleDirective} from "../item/item-circle.directive";
import {Item} from "../item/item";
import {ImageHelperDirective} from "../item/image-helper.directive"

@Component({
    selector: 'hall-detail',
    inputs: ['hall'],
    template: `
            <div  *ngIf="hall">
                <div class="hallMap">
                    <svg [viewBoxHelper]="halls" [hall]="hall" height="100%" width="100%">
                        <polygon [hallPoints]="hall" [offset]="false" (click)="onSelect(hall)"/>
                        <circle *ngFor="#item of hall.items" [itemCircle]="item" [time]="time" [radius]="hall.circleRadius" (click)="onSelect(item)"/>
                        <image *ngFor="#item of hall.items" [imageHelper]="item" [radius]="hall.circleRadius" (click)="onSelect(item)"></image>
                    </svg>
                </div>

                <div class="hallInfo">
                    <h2>{{hall.name}} details!</h2><h4>Oppervlakte: {{hall.surface}}m²</h4>
                    <h4>Aantal items: {{hall.items.length}}</h4>
                    <h4 *ngIf="itemsWithAction">Aantal items met actie: {{itemsWithAction.length}}</h4>
                </div>
            </div>
        `,
    styles: [`
        li {
            list-style-type:none;
        }

        circle {
            cursor: pointer;
        }

        image {
            cursor: pointer;
        }

        .hallMap {
            width:80%;
            max-width: 150em;
            float:left;
        }
    `],
    directives: [HallPointsDirective,ViewBoxHelperDirective,ItemCircleDirective,ImageHelperDirective]
})
export class HallDetailComponent implements OnInit{
    public hall: Hall;
    private time:number;
    private itemsWithAction:Item[];
    constructor(private _hallService:HallService,
                private _router:Router,
                private _routeParams:RouteParams) { }

    ngOnInit() {
        let name = this._routeParams.get('name');
        this._hallService.getActionReminderTimer().then(time => this.time = time);
        //this._hallService.getHall(name).then(hall => this.hall = hall).then(hall => this.getItemsWithAction(hall));
        this._hallService.getHall(name).subscribe((hall:Hall) => {
            this.hall = hall;
            this.getItemsWithAction(this.hall);
        });
    }

    getItemsWithAction(hall: Hall) {
        if (this.hall != null) {
            this.itemsWithAction = [];
            var upperDate:Date = this.getUpperDate();
            for (var i = 0; i < this.hall.items.length; i++) {
                var itemDate:Date = new Date(this.hall.items[i].nextAction.date);
                if (itemDate < upperDate) {
                    this.itemsWithAction.push(this.hall.items[i]);
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

    onSelect(item: Item) {
        this._router.navigate(['ItemDetail', {name:this.hall.name,itemname:item.name}])
    }
}