/**
 * Created by Jente on 7/01/2016.
 */
import {Directive, ElementRef, Renderer, Input} from 'angular2/core';
import {Item} from "./item";
@Directive({
    selector: '[itemCircle]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class ItemCircleDirective {
    private _item:Item;
    @Input('itemCircle') set item(item:Item) {
        this._item = item;
    }
    private _time: number;
    @Input() set time(time:number) {
        this._time = time;
    }
    private _radius:number = 1;
    @Input() set radius(radius:number) {
        this._radius = radius;
        this.defineCircle();
    }

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    private defineCircle() {
        if (new Date(this._item.nextAction.date) < this.getUpperDate()) {
            this.renderer.setElementAttribute(this.el,"cx",""+this._item.point.x);
            this.renderer.setElementAttribute(this.el,"cy",""+this._item.point.y);
            this.renderer.setElementAttribute(this.el,"r",""+this._radius);
            this.renderer.setElementAttribute(this.el, "fill","red");
            this.renderer.setElementAttribute(this.el, "stroke","black");
            this.renderer.setElementAttribute(this.el, "stroke-width",""+(this._radius/5));
        }

        /*
        this.renderer.setElementAttribute(this.el,"cx",""+this._item.point.x);
        this.renderer.setElementAttribute(this.el,"cy",""+this._item.point.y);
        this.renderer.setElementAttribute(this.el,"r",""+this._radius);
        var color = "green";
        if (new Date(this._item.nextAction.date) < this.getUpperDate())
            color = "red";
        this.renderer.setElementAttribute(this.el, "fill",color);
        this.renderer.setElementAttribute(this.el, "stroke","black");
        this.renderer.setElementAttribute(this.el, "stroke-width",""+(this._radius/5));
        */
    }

    getUpperDate():Date {
        var date = new Date();
        var milisToAdd = this._time*60*60*1000;
        date.setTime(date.getTime() + milisToAdd);
        return date;
    }

    onMouseEnter() {
        //this.setColor(this._hall.highLightColor,this._hall.borderColor);
    }
    onMouseLeave() {
        //this.setColor(this._hall.color,this._hall.borderColor);
    }
}