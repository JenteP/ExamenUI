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
    var HallPointsDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HallPointsDirective = (function () {
                /*@Input() set hall(hall:Hall) {
                    this._hall = hall;
                    this.setPoints();
                }*/
                function HallPointsDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                Object.defineProperty(HallPointsDirective.prototype, "hall", {
                    set: function (hall) {
                        this._hall = hall;
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(HallPointsDirective.prototype, "offset", {
                    set: function (offset) {
                        this._offset = offset;
                        this.setPoints();
                    },
                    enumerable: true,
                    configurable: true
                });
                HallPointsDirective.prototype.setPoints = function () {
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
                    this.renderer.setElementAttribute(this.el, "points", pointsString);
                    this.setColor(this._hall.color, this._hall.borderColor);
                };
                HallPointsDirective.prototype.setColor = function (color, stroke) {
                    var colorString = "fill:" + color + ";stroke:" + stroke + ";stroke-width:1";
                    this.renderer.setElementAttribute(this.el, "style", colorString);
                };
                HallPointsDirective.prototype.onMouseEnter = function () {
                    if (this._offset)
                        this.setColor(this._hall.highLightColor, this._hall.borderColor);
                };
                HallPointsDirective.prototype.onMouseLeave = function () {
                    if (this._offset)
                        this.setColor(this._hall.color, this._hall.borderColor);
                };
                __decorate([
                    core_1.Input('hallPoints'), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], HallPointsDirective.prototype, "hall", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], HallPointsDirective.prototype, "offset", null);
                HallPointsDirective = __decorate([
                    core_1.Directive({
                        selector: '[hallPoints]',
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HallPointsDirective);
                return HallPointsDirective;
            })();
            exports_1("HallPointsDirective", HallPointsDirective);
        }
    }
});
//# sourceMappingURL=hall-points.directive.js.map