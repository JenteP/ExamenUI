/**
 * Created by Jente on 7/01/2016.
 */
import {Directive, ElementRef, Renderer, Input} from 'angular2/core';
import {Hall} from "./hall";
@Directive({
    selector: '[hallPoints]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HallPointsDirective {
    @Input('hallPoints') _hall:Hall;
    private _offset:boolean;
    @Input() set offset(offset:boolean) {
        this._offset = offset;
    }
    @Input() set hall(hall:Hall) {
        this._hall = hall;
        this.setPoints();
    }

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    private setPoints() {
        var originX = 0;
        var originY = 0;
        if (this._offset) {
            var originX = this._hall.origin.x;
            var originY = this._hall.origin.y;
        }

        var pointsString = originX + "," + originY + " ";
        for (var i = 0; i < this._hall.points.length; i++) {
            var x = originX + this._hall.points[i].x;
            var y = originY + this._hall.points[i].y;

            pointsString += x + "," + y + " ";
        }

        this.renderer.setElementAttribute(this.el,"points",pointsString);
        this.setColor(this._hall.color,this._hall.borderColor);
    }

    private setColor(color:string,stroke:string) {
        var colorString = "fill:" + color + ";stroke:" + stroke + ";stroke-width:1";
        this.renderer.setElementAttribute(this.el, "style",colorString);
    }

    onMouseEnter() {
        if (this._offset)
            this.setColor(this._hall.highLightColor,this._hall.borderColor);
    }
    onMouseLeave() {
        if (this._offset)
            this.setColor(this._hall.color,this._hall.borderColor);
    }
}