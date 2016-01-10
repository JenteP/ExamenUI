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
import {Hall} from "../hall/hall";



@Component({
    selector: 'item-detail',
    inputs: ['item'],
    template: `
            <div id="itemDetails" *ngIf="item">
                <h4>{{item.name}}  <i class="glyphicon glyphicon-floppy-disk" (click)="post()"></i></h4>
                <div id="itemDetail">
                    <label for="name">Name</label>
                    <input id="name" [(ngModel)]="item.name" placeholder="name">
                    <label for="productNumber">Product Number</label>
                    <input id="productNumber" [(ngModel)]="item.productNumber">
                    <label for="category">Category</label>
                    <select id="category" [(ngModel)]="item.category">
                        <option *ngFor="#category of categories">{{category}}</option>
                    </select>
                    <label for="description">Description</label>
                    <textarea id="description" [(ngModel)]="item.description" rows="4" cols="30"></textarea>
                </div>
                <div id="actions">
                    <div class="actionDetails">
                        <h5>Last action</h5>
                        <action-detail [action]="item.lastAction"></action-detail>
                    </div>
                    <div class="actionDetails">
                        <h5>Next action</h5>
                        <action-detail [action]="item.nextAction"></action-detail>
                        <i class="glyphicon glyphicon-ok" (click)="onActionDone(item.nextAction)"></i>
                    </div>
                </div>
            </div>
        `,
    directives:[ActionDetailComponent],
    styles: [`
        #itemDetails {
            border: 1px solid lightgray;
        }

        .actionDetails {
            display: inline-block;
            width: 45%;
            max-width: 20em;
            float: left;
        }

        input {
            margin:0.1em 0;
            width:100%;
        }
        textarea {
            margin:0.1em 0;
            width:100%;
        }
        select {
            margin:0.1em 0;
            width:100%;
        }

        #itemDetail {
            width:90%;
            max-width:40em;
            margin-left:1em;
        }

        #saveButton {
            width:5em;
        }

        i {
            cursor:pointer;
        }

        i:hover {
            color: lightgreen;
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
        //this._categoryService.getCategories().then(cats => this.setCategories(cats));
        this._categoryService.getCategories().subscribe(cats => this.setCategories(cats));
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
        //this._hallService.getItemFromHall(hallName,itemName).then(item => this.item = item);
        this._hallService.getHall(hallName).subscribe((hall:Hall) => this.setItem(hall,itemName));
    }

    setItem(hall: Hall, itemName: string) {
        for (var i = 0; i < hall.items.length; i++) {
            if (hall.items[i].name == itemName) {
                this.item = hall.items[i];
                return;
            }
        }
    }

    post() {
        this._hallService.postItem(this.item);

    }
}