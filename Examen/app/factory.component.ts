/**
 * Created by Jente on 3/01/2016.
 */
import {Component} from 'angular2/core';
import {Hall} from './hall/hall';
import {HallDetailComponent} from './hall/hall-detail.component';
import {HallService} from './hall/hall.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'factory',
    template: `
        <h1>Factory: {{name}}</h1>
        <h3>Halls:</h3>
        <div class="halls">
            <div *ngFor="#hall of halls">
                <hall-detail [hall]="hall"></hall-detail>
            </div>
        </div>
    `,
    directives: [HallDetailComponent],
    providers: [HallService]
})
export class Factory implements OnInit{
    public name = 'GoodId';
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