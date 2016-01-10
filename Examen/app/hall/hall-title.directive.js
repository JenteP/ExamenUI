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
    var HallTitleDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HallTitleDirective = (function () {
                /*@Input() set hall(hall:Hall) {
                    this._hall = hall;
                    this.setPoints();
                }*/
                function HallTitleDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                Object.defineProperty(HallTitleDirective.prototype, "hall", {
                    set: function (hall) {
                        this._hall = hall;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HallTitleDirective.prototype, "offset", {
                    set: function (offset) {
                        this._offset = offset;
                        this.setPoints();
                    },
                    enumerable: true,
                    configurable: true
                });
                HallTitleDirective.prototype.setPoints = function () {
                    var originX = 0;
                    var originY = 0;
                    if (this._offset) {
                        var originX = this._hall.origin.x;
                        var originY = this._hall.origin.y + 10;
                    }
                    this.renderer.setElementAttribute(this.el, "x", originX + "");
                    this.renderer.setElementAttribute(this.el, "y", (originY + 5) + "");
                    this.setColor(this._hall.highLightColor);
                };
                HallTitleDirective.prototype.setColor = function (color) {
                    this.renderer.setElementAttribute(this.el, "fill", color);
                };
                HallTitleDirective.prototype.onMouseEnter = function () {
                    if (this._offset)
                        this.setColor(this._hall.borderColor);
                };
                HallTitleDirective.prototype.onMouseLeave = function () {
                    if (this._offset)
                        this.setColor(this._hall.highLightColor);
                };
                __decorate([
                    core_1.Input('hallTitle'), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], HallTitleDirective.prototype, "hall", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], HallTitleDirective.prototype, "offset", null);
                HallTitleDirective = __decorate([
                    core_1.Directive({
                        selector: '[hallTitle]',
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HallTitleDirective);
                return HallTitleDirective;
            })();
            exports_1("HallTitleDirective", HallTitleDirective);
        }
    }
});
//# sourceMappingURL=hall-title.directive.js.map