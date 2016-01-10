/**
 * Created by Jente on 7/01/2016.
 */
import {Directive, ElementRef, Renderer, Input} from 'angular2/core';
import {Item} from "./item";
import {CategoryService} from "./category.service";
import {Category} from "./category";
@Directive({
    selector: '[imageHelper]',
    providers: [CategoryService]
})
export class ImageHelperDirective {
    private _item:Item;
    @Input('imageHelper') set item(item:Item) {
        this._item = item;
        this.getIcon();
    }
    private _time: number;
    @Input() set time(time:number) {
        this._time = time;
    }
    private _radius:number = 1;
    @Input() set radius(radius:number) {
        this._radius = radius;
        this.defineImage();
    }
    private _image:string;

    constructor(private _categoryService:CategoryService, private el: ElementRef, private renderer: Renderer) {
    }

    private defineImage() {
        var offset:number = 0.6;
        var positionCorrection = this._radius * offset;
        var scaleCorrection = this._radius * offset * 2;

        this.renderer.setElementAttribute(this.el,"x",""+(this._item.point.x - positionCorrection));
        this.renderer.setElementAttribute(this.el,"y",""+(this._item.point.y - positionCorrection));
        this.renderer.setElementAttribute(this.el,"height",""+(scaleCorrection));
        this.renderer.setElementAttribute(this.el,"width",""+(scaleCorrection));
        //credit to Bert Willekens
        this.el.nativeElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', this._image);
    }

    getIcon() {
        //this._categoryService.getCategory(this._item.category).then(cat => this._image = cat.image);
        //Promise.resolve(this._categoryService.getCategory(this._item.category)).then(cat => this.setImage(cat));
        this._categoryService.getCategories().subscribe(cats => this.filterCategorie(cats));
    }

    filterCategorie(categories:Category[]) {
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].name == this._item.category) {
                this.setImage(categories[i]);
                return;
            }
        }
    }

    setImage(category: Category) {
        this._image = category.image;
        this.defineImage();
    }

    getUpperDate():Date {
        var date = new Date();
        var hoursToAdd = this._time*60*60*1000;
        date.setTime(date.getTime() + hoursToAdd);
        return date;
    }
}
