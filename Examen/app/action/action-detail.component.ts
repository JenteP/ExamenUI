/**
 * Created by Jente on 4/01/2016.
 */
import {Component} from 'angular2/core';
import {Action} from "./action";
import {HallService} from "./../hall/hall.service";

@Component({
    selector: 'action-detail',
    inputs: ['action'],
    template: `
            <div class="actionDetails" *ngIf="action">
                <input [(ngModel)]="action.description" placeholder="name">
            </div>
        `,
    styles: [`
    `]
})
export class ActionDetailComponent {
    public action: Action;
    constructor(private _hallService: HallService) {}
}