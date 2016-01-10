/**
 * Created by Jente on 7/01/2016.
 */
import {Directive, ElementRef, Renderer, Input} from 'angular2/core';
import {Hall} from "./hall";
@Directive({
    selector: '[viewBoxHelper]'
})
export class ViewBoxHelperDirective {
    private _halls:Hall[];
    @Input('viewBoxHelper') set halls(halls:Hall[]) {
        this._halls = halls;
        this._singleHall = false;
        this.defineBounderies();
    }
    /*@Input() set halls(halls:Hall[]) {
        this._halls = halls;
        this._singleHall = false;
        this.defineBounderies();
    }*/
    @Input() set hall(hall:Hall) {
        var halls:Hall[] = [hall];
        this._halls = halls;
        this._singleHall = true;
        this.defineBounderies();
    }
    private _singleHall:boolean;

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    private defineBounderies() {
        if (this._halls != null) {
            var maxWidth = this._halls[0].origin.x;
            var maxHeight = this._halls[0].origin.y;
            for (var i = 0; i < this._halls.length; i++) {
                if (this._halls[i].origin.x > maxWidth) maxWidth = this._halls[i].origin.x;
                if (this._halls[i].origin.y > maxHeight) maxHeight = this._halls[i].origin.y;
                for (var j = 0; j < this._halls[i].points.length; j++) {
                    var x = this._halls[i].points[j].x;
                    var y = this._halls[i].points[j].y;
                    if (!this._singleHall) {
                        x += this._halls[i].origin.x;
                        y += this._halls[i].origin.y;
                    }
                    if (x > maxWidth) maxWidth = x;
                    if (y > maxHeight) maxHeight = y;
                }
            }
            var viewboxString = "0 0 " + maxWidth + " " + maxHeight;
            this.renderer.setElementAttribute(this.el, "viewBox", viewboxString);
        }
    }
}