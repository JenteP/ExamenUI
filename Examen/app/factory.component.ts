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
import {ItemDetailComponent} from "./item/item-detail.component";
import {} from './settings/settings.component';
import {SettingsComponent} from "./settings/settings.component";

@Component({
    selector: 'factory',
    template: `
        <h1>Factory: {{name}}</h1>
        <nav>
            <a [routerLink]="['List']">List</a>
            <a [routerLink]="['BluePrint']">Map</a>
            <a [routerLink]="['Settings']">Settings</a>

        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [HallListComponent, ROUTER_DIRECTIVES],
    providers: [HallService]
})
@RouteConfig([
    {path:'/list',              name: 'List',      component:HallListComponent},
    {path:'/blueprint',         name: 'BluePrint',  component:HallBluePrintComponent},
    {path:'/hall/:name',         name: 'HallDetail',  component:HallDetailComponent},
    {path:'/hall/:name/item/:itemname',         name: 'ItemDetail',  component:ItemDetailComponent},
    {path:'/settings',          name: 'Settings',  component:SettingsComponent}
])
export class Factory implements OnInit{
    public name = 'GoodId';
    public halls: Hall[];

    constructor(private _hallService: HallService){}
    getHalls() {
        this._hallService.getHalls().then(halls => this.halls = halls);
    }

    ngOnInit() {
        this.getHalls();
    }
}