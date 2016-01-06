/**
 * Created by Jente on 3/01/2016.
 */
import {Component} from 'angular2/core';
import {Hall} from './hall/hall';
import {HallDetailComponent} from './hall/hall-detail.component';
import {HallService} from './hall/hall.service';
import {HallListComponent} from './hall/hall-list.component';
import {HallBluePrintComponent} from './hall/hall-blueprint.component';
import {OnInit} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'factory',
    template: `
        <h1>Factory: {{name}}</h1>
        <nav>
            <a [routerLink]="['List']">List</a>
            <a [routerLink]="['BluePrint']">Map</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [HallListComponent, ROUTER_DIRECTIVES],
    providers: [HallService]
})
@RouteConfig([
    {path:'/list',              name: 'List',      component:HallListComponent},
    {path:'/blueprint',         name: 'BluePrint',  component:HallBluePrintComponent}
])
export class Factory implements OnInit{
    public name = 'GoodId';
    public halls: Hall[];
    public actionReminderTime: number = 86400000;

    constructor(private _hallService: HallService){}
    getHalls() {
        this._hallService.getHalls().then(halls => this.halls = halls);
    }

    ngOnInit() {
        this.getHalls();
    }
}