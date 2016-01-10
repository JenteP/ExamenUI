/**
 * Created by Jente on 7/01/2016.
 */
import {Directive, ElementRef, Renderer, Input} from 'angular2/core';
import {Hall} from "./hall";
@Directive({
    selector: '[hallTitle]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HallTitleDirective {
    private _hall:Hall;
    @Input('hallTitle') set hall(hall:Hall) {
        this._hall = hall;
    }
    private _offset:boolean;
    @Input() set offset(offset:boolean) {
        this._offset = offset;
        this.setPoints();
    }
    /*@Input() set hall(hall:Hall) {
        this._hall = hall;
        this.setPoints();
    }*/

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    private setPoints() {
        var originX = 0;
        var originY = 0;
        if (this._offset) {
            var originX = this._hall.origin.x;
            var originY = this._hall.origin.y +10;
        }
        this.renderer.setElementAttribute(this.el,"x",originX + "");
        this.renderer.setElementAttribute(this.el,"y",(originY+5) + "");
        this.setColor(this._hall.highLightColor);
    }

    setColor(color:string) {
        this.renderer.setElementAttribute(this.el,"fill",color);
    }

    onMouseEnter() {
        if (this._offset)
            this.setColor(this._hall.borderColor);
    }
    onMouseLeave() {
        if (this._offset)
            this.setColor(this._hall.highLightColor);
    }
}