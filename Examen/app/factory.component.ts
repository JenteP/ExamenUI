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
        <nav>
            <ul>
                <li><a [routerLink]="['List']"><i class="glyphicon glyphicon-th-list"></i></a></li>
                <li><a [routerLink]="['BluePrint']"><i class="glyphicon glyphicon-globe"></i></a></li>
                <li id="settings"><a [routerLink]="['Settings']"><i class="glyphicon glyphicon-cog"></i></a></li>
            </ul>
        </nav>
        <router-outlet></router-outlet>
    `,
    styles: [`
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            border: 1px solid lightgray;
        }

        li {
            float: left;
        }

        #settings {
            float: right;
        }

        li a {
            display: inline-block;
            color: black;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 2em;
        }

        li a:hover {
            background-color: lightgray;
            color:white;
        }
    `],
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
    public halls: Hall[];

    constructor(private _hallService: HallService){}
    getHalls() {
        //this._hallService.getHalls().then(halls => this.halls = halls);
        this._hallService.getHalls().subscribe((halls:Hall[]) => this.halls = halls);
    }

    ngOnInit() {
        this.getHalls();
    }
}