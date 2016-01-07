/**
 * Created by Jente on 6/01/2016.
 */
import {Component} from 'angular2/core';
import {Hall} from './hall';
import {HallService} from './hall.service';
import {OnInit} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {HallQuickViewComponent} from "./hall-quickview.component";
import {Router} from "angular2/router";

@Component({
    selector: 'hall-list',
    template: `
        <h3>Hall List:</h3>
        <div class="halls">
            <div *ngFor="#hall of halls"
                (click)="onSelect(hall)">
                <hall-quickview [hall]="hall"></hall-quickview>
            </div>
        </div>
    `,
    directives: [HallQuickViewComponent],
    providers: [HallService]
})
export class HallListComponent implements OnInit{
    public halls: Hall[];
    public actionReminderTime: number = 86400000;

    constructor(private _hallService: HallService,
                private _router:Router){}

    onSelect(hall:Hall) {
        this._router.navigate(['HallDetail', {name:hall.name}])
    }

    ngOnInit() {
        this._hallService.getHalls().then(halls => this.halls = halls);
    }
}