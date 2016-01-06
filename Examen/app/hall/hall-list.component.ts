/**
 * Created by Jente on 6/01/2016.
 */
import {Component} from 'angular2/core';
import {Hall} from './hall';
import {HallDetailComponent} from './hall-detail.component';
import {HallService} from './hall.service';
import {OnInit} from 'angular2/core';
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'hall-list',
    template: `
        <h3>Hall List:</h3>
        <div class="halls">
            <div *ngFor="#hall of halls">
                <hall-detail [hall]="hall"></hall-detail>
            </div>
        </div>
    `,
    directives: [HallDetailComponent],
    providers: [HallService]
})
export class HallListComponent implements OnInit{
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