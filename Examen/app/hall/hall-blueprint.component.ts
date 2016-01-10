/**
 * Created by Jente on 6/01/2016.
 */
import {Component} from 'angular2/core';
import {Hall} from './hall';
import {HallService} from './hall.service';
import {OnInit} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {HallQuickViewComponent} from "./hall-quickview.component";
import {Router} from "angular2/router";
import {HallPointsDirective} from "./hall-points.directive";
import {ViewBoxHelperDirective} from "./viewbox-helper.directive";
import {HallTitleDirective} from "./hall-title.directive";

@Component({
    selector: 'hall-blueprint',
    template: `
        <div class="hallInfo">
            <ul>
                <li *ngFor="#hall of halls" (click)="onSelect(hall)">
                    <hall-quickview [hall]="hall"></hall-quickview>
                </li>
            </ul>
        </div>

        <div class="hallMap">
            <svg [viewBoxHelper]="halls" height="100%" width="100%">
                <g *ngFor="#hall of halls" (click)="onSelect(hall)">
                    <polygon [hallPoints]="hall" [offset]="true"/>
                    <text [hallTitle]="hall" [offset]="true" font-family="Verdana" font-size="5">{{hall.name}}</text>
                </g>
            </svg>
        </div>
    `,
    styles: [`
        polygon {
            cursor: pointer;
        }

        text {
            cursor:pointer
        }

        li {
            list-style-type:none;
        }

        .hallInfo {
            max-width: 20em;
            min-width:15em;
            width: 40%;
            float: left;
        }

        .hallMap {
            min-width:25em;
            max-width:75em;
            width: 70%;
            float: left;
        }
    `],
    directives: [HallQuickViewComponent,HallPointsDirective,ViewBoxHelperDirective,HallTitleDirective],
    providers: [HallService]
})
export class HallBluePrintComponent implements OnInit{
    public halls: Hall[];
    public actionReminderTime: number = 86400000;

    constructor(private _hallService: HallService,
                private _router:Router){}
    getHalls() {
        //this._hallService.getHalls().then(halls => this.halls = halls);
        this._hallService.getHalls().subscribe((halls:Hall[]) => this.halls = halls);
    }

    onSelect(hall:Hall) {
        this._router.navigate(['HallDetail', {name:hall.name}])
    }

    ngOnInit() {
        this.getHalls();
    }
}