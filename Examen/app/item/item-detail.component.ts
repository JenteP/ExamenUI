/**
 * Created by Jente on 4/01/2016.
 */
import {Component} from 'angular2/core';
import {Item} from "./item";
import {HallService} from "./../hall/hall.service";
import {ActionDetailComponent} from "../action/action-detail.component";
import {OnInit} from "angular2/core";
import {Router,RouteParams} from "angular2/router";
import {Category} from "./category";
import {CategoryService} from "./category.service";
import {Action} from "../action/action";



@Component({
    selector: 'item-detail',
    inputs: ['item'],
    template: `
            <div class="itemDetails" *ngIf="item">
                <h4>{{item.name}}</h4>
                <div>
                    <input [(ngModel)]="item.name" placeholder="name">
                </div>
                <div>
                    <input [(ngModel)]="item.productNumber">
                </div>
                <div>
                    <select [(ngModel)]="item.category">
                        <option *ngFor="#category of categories">{{category}}</option>
                    </select>
                </div>
                <div>
                    <input [(ngModel)]="item.description">
                </div>
                <div class="actions">
                    <div class="actionDetails">
                        <h5>Last action:</h5>
                        <action-detail [action]="item.lastAction"></action-detail>
                    </div>
                    <div class="actionDetails">
                        <h5>Next action:</h5>
                        <action-detail [action]="item.nextAction"></action-detail>
                        <input type="button" (click)="onActionDone(item.nextAction)" value="Done">
                    </div>
                </div>
            </div>
        `,
    directives:[ActionDetailComponent],
    styles: [`
        .itemDetails {
            background-color:#f5f5f0;
        }

        .actionDetails {
            display: block;
            width: 90%;
            max-width: 90%;
        }

        input {
            margin-left:5%;
            width:90%;
        }

        select {
            margin-left:5%;
            width:90%;
        }
    `],
    providers: [CategoryService]
})
export class ItemDetailComponent implements OnInit{
    public item: Item;
    public categories: string[];
    constructor(private _hallService: HallService,
                private _categoryService: CategoryService,
                private _router:Router,
                private _routeParams:RouteParams) {
        this.categories = [];
        this._categoryService.getCategories().then(cats => this.setCategories(cats));
    }
    setCategories(categories: Category[]) {
        for (var i = 0; i < categories.length; i++) {
            this.categories.push(categories[i].name);
        }
    }

    onActionDone(action: Action) {
        this.item.lastAction = action;
        this.item.nextAction = new Action();
    }

    ngOnInit() {
        let hallName = this._routeParams.get('name');
        let itemName = this._routeParams.get('itemname');
        this._hallService.getItemFromHall(hallName,itemName).then(item => this.item = item);
    }
}