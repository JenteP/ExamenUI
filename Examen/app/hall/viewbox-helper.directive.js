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
    var ViewBoxHelperDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ViewBoxHelperDirective = (function () {
                function ViewBoxHelperDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                Object.defineProperty(ViewBoxHelperDirective.prototype, "halls", {
                    set: function (halls) {
                        this._halls = halls;
                        this._singleHall = false;
                        this.defineBounderies();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ViewBoxHelperDirective.prototype, "hall", {
                    set: function (hall) {
                        var halls = [hall];
                        this._halls = halls;
                        this._singleHall = true;
                        this.defineBounderies();
                    },
                    enumerable: true,
                    configurable: true
                });
                ViewBoxHelperDirective.prototype.defineBounderies = function () {
                    if (this._halls != null) {
                        var maxWidth = this._halls[0].origin.x;
                        var maxHeight = this._halls[0].origin.y;
                        for (var i = 0; i < this._halls.length; i++) {
                            if (this._halls[i].origin.x > maxWidth)
                                maxWidth = this._halls[i].origin.x;
                            if (this._halls[i].origin.y > maxHeight)
                                maxHeight = this._halls[i].origin.y;
                            for (var j = 0; j < this._halls[i].points.length; j++) {
                                var x = this._halls[i].points[j].x;
                                var y = this._halls[i].points[j].y;
                                if (!this._singleHall) {
                                    x += this._halls[i].origin.x;
                                    y += this._halls[i].origin.y;
                                }
                                if (x > maxWidth)
                                    maxWidth = x;
                                if (y > maxHeight)
                                    maxHeight = y;
                            }
                        }
                        var viewboxString = "0 0 " + maxWidth + " " + maxHeight;
                        this.renderer.setElementAttribute(this.el, "viewBox", viewboxString);
                    }
                };
                __decorate([
                    core_1.Input('viewBoxHelper'), 
                    __metadata('design:type', Array)
                ], ViewBoxHelperDirective.prototype, "_halls", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array), 
                    __metadata('design:paramtypes', [Array])
                ], ViewBoxHelperDirective.prototype, "halls", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], ViewBoxHelperDirective.prototype, "hall", null);
                ViewBoxHelperDirective = __decorate([
                    core_1.Directive({
                        selector: '[viewBoxHelper]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], ViewBoxHelperDirective);
                return ViewBoxHelperDirective;
            })();
            exports_1("ViewBoxHelperDirective", ViewBoxHelperDirective);
        }
    }
});
//# sourceMappingURL=viewbox-helper.directive.js.map