System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ItemCircleDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ItemCircleDirective = (function () {
                function ItemCircleDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                    this._radius = 1;
                }
                Object.defineProperty(ItemCircleDirective.prototype, "item", {
                    set: function (item) {
                        this._item = item;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ItemCircleDirective.prototype, "time", {
                    set: function (time) {
                        this._time = time;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ItemCircleDirective.prototype, "radius", {
                    set: function (radius) {
                        this._radius = radius;
                        this.defineCircle();
                    },
                    enumerable: true,
                    configurable: true
                });
                ItemCircleDirective.prototype.defineCircle = function () {
                    if (new Date(this._item.nextAction.date) < this.getUpperDate()) {
                        this.renderer.setElementAttribute(this.el, "cx", "" + this._item.point.x);
                        this.renderer.setElementAttribute(this.el, "cy", "" + this._item.point.y);
                        this.renderer.setElementAttribute(this.el, "r", "" + this._radius);
                        this.renderer.setElementAttribute(this.el, "fill", "red");
                        this.renderer.setElementAttribute(this.el, "stroke", "black");
                        this.renderer.setElementAttribute(this.el, "stroke-width", "" + (this._radius / 5));
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
                };
                ItemCircleDirective.prototype.getUpperDate = function () {
                    var date = new Date();
                    var milisToAdd = this._time * 60 * 60 * 1000;
                    date.setTime(date.getTime() + milisToAdd);
                    return date;
                };
                ItemCircleDirective.prototype.onMouseEnter = function () {
                    //this.setColor(this._hall.highLightColor,this._hall.borderColor);
                };
                ItemCircleDirective.prototype.onMouseLeave = function () {
                    //this.setColor(this._hall.color,this._hall.borderColor);
                };
                __decorate([
                    core_1.Input('itemCircle'), 
                    __metadata('design:type', Object)
                ], ItemCircleDirective.prototype, "_item", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], ItemCircleDirective.prototype, "item", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], ItemCircleDirective.prototype, "time", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], ItemCircleDirective.prototype, "radius", null);
                ItemCircleDirective = __decorate([
                    core_1.Directive({
                        selector: '[itemCircle]',
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], ItemCircleDirective);
                return ItemCircleDirective;
            })();
            exports_1("ItemCircleDirective", ItemCircleDirective);
        }
    }
});
//# sourceMappingURL=item-circle.directive.js.map