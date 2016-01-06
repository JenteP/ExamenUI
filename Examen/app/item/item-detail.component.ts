/**
 * Created by Jente on 4/01/2016.
 */
import {Component} from 'angular2/core';
import {Item} from "./item";
import {HallService} from "./../hall/hall.service";
import {ActionDetailComponent} from "../action/action-detail.component";

@Component({
    selector: 'item-detail',
    inputs: ['item'],
    template: `
            <div class="itemDetails" *ngIf="item">
                <h4>{{item.name}} details!</h4>
                <div>
                    <input [(ngModel)]="item.name" placeholder="name">:<input [(ngModel)]="item.productNumber" placeholder="number">
                </div>
                <div class="actions">
                    <h5>Last Action:</h5>
                    <action-detail [action]="item.lastAction"></action-detail>
                    <h5>Next Action:</h5>
                    <action-detail [action]="item.nextAction"></action-detail>
                </div>
        </div>
        `,
    directives:[ActionDetailComponent],
    styles: [`
        .itemDetails {
            background-color:#f5f5f0;
        }
    `]
})
export class ItemDetailComponent {
    public item: Item;
    constructor(private _hallService: HallService) {}
}