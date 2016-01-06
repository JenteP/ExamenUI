/**
 * Created by Jente on 3/01/2016.
 */
import {Component} from 'angular2/core';
import {Hall} from "./hall";
import {HallService} from "./hall.service";
import {ItemDetailComponent} from "./../item/item-detail.component";

@Component({
    selector: 'hall-detail',
    inputs: ['hall'],
    template: `
            <div class="hallDetails" *ngIf="hall">
                <h2>{{hall.name}} details!</h2>
                <!--
                <div class="hallDetail">
                    <input [(ngModel)]="hall.name" placeholder="name">:<input [(ngModel)]="hall.surface" placeholder="surface">m²
                </div>
                -->
                <h4>Oppervlakte: {{hall.surface}}m²</h4>
                <h4>Aantal items: {{hall.items.length}}</h4>
                <h4>Aantal items met actie vereist: {{hall.itemsRequiringAction.length}}</h4>

                <!--
                <h4>Item details (<span>{{hall.items.length}}</span>):</h4>
                <div class="itemDetail" *ngFor="#item of hall.items">
                    <item-detail [item]="item"></item-detail>
                </div>
                <h4>Items with actions details (<span>{{hall.itemsRequiringAction.length}}</span>):</h4>
                <div class="itemDetail" *ngFor="#item of hall.itemsRequiringAction">
                    <item-detail [item]="item"></item-detail>
                </div>
                -->
            </div>
        `,
    directives: [ItemDetailComponent],
    styles: [`
        .hallDetails {
            background-color:#eaeae1;
        }
    `]
})
export class HallDetailComponent {
    public hall: Hall;
    constructor(private _hallService: HallService) {}
}