/**
 * Created by Jente on 8/01/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {HallService} from "../hall/hall.service";

@Component({
    selector: 'hall-detail',
    inputs: ['hall'],
    template: `
            <h2>Settings</h2>
            <div>Time:<input [(ngModel)]="time" placeholder="time"><input type="submit" value="Submit" (click)="onSubmit()"></div>
        `,
    styles: [`

    `]
})
export class SettingsComponent implements OnInit{
    private time:number;
    constructor(private _hallService:HallService) { }

    ngOnInit() {
        this._hallService.getActionReminderTimer().then(time => this.time = time);
    }

    onSubmit() {
        this._hallService.setActionReminderTimer(this.time);
    }
}