System.register(['angular2/core', "./category.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, category_service_1;
    var ImageHelperDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            }],
        execute: function() {
            ImageHelperDirective = (function () {
                function ImageHelperDirective(_categoryService, el, renderer) {
                    this._categoryService = _categoryService;
                    this.el = el;
                    this.renderer = renderer;
                    this._radius = 1;
                }
                Object.defineProperty(ImageHelperDirective.prototype, "item", {
                    set: function (item) {
                        this._item = item;
                        this.getIcon();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageHelperDirective.prototype, "time", {
                    set: function (time) {
                        this._time = time;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImageHelperDirective.prototype, "radius", {
                    set: function (radius) {
                        this._radius = radius;
                        this.defineImage();
                    },
                    enumerable: true,
                    configurable: true
                });
                ImageHelperDirective.prototype.defineImage = function () {
                    var offset = 0.6;
                    var positionCorrection = this._radius * offset;
                    var scaleCorrection = this._radius * offset * 2;
                    this.renderer.setElementAttribute(this.el, "x", "" + (this._item.point.x - positionCorrection));
                    this.renderer.setElementAttribute(this.el, "y", "" + (this._item.point.y - positionCorrection));
                    this.renderer.setElementAttribute(this.el, "height", "" + (scaleCorrection));
                    this.renderer.setElementAttribute(this.el, "width", "" + (scaleCorrection));
                    //credit to Bert Willekens
                    this.el.nativeElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', this._image);
                };
                ImageHelperDirective.prototype.getIcon = function () {
                    var _this = this;
                    //this._categoryService.getCategory(this._item.category).then(cat => this._image = cat.image);
                    //Promise.resolve(this._categoryService.getCategory(this._item.category)).then(cat => this.setImage(cat));
                    this._categoryService.getCategories().subscribe(function (cats) { return _this.filterCategorie(cats); });
                };
                ImageHelperDirective.prototype.filterCategorie = function (categories) {
                    for (var i = 0; i < categories.length; i++) {
                        if (categories[i].name == this._item.category) {
                            this.setImage(categories[i]);
                            return;
                        }
                    }
                };
                ImageHelperDirective.prototype.setImage = function (category) {
                    this._image = category.image;
                    this.defineImage();
                };
                ImageHelperDirective.prototype.getUpperDate = function () {
                    var date = new Date();
                    var hoursToAdd = this._time * 60 * 60 * 1000;
                    date.setTime(date.getTime() + hoursToAdd);
                    return date;
                };
                __decorate([
                    core_1.Input('imageHelper'), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], ImageHelperDirective.prototype, "item", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], ImageHelperDirective.prototype, "time", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], ImageHelperDirective.prototype, "radius", null);
                ImageHelperDirective = __decorate([
                    core_1.Directive({
                        selector: '[imageHelper]',
                        providers: [category_service_1.CategoryService]
                    }), 
                    __metadata('design:paramtypes', [category_service_1.CategoryService, core_1.ElementRef, core_1.Renderer])
                ], ImageHelperDirective);
                return ImageHelperDirective;
            })();
            exports_1("ImageHelperDirective", ImageHelperDirective);
        }
    }
});
//# sourceMappingURL=image-helper.directive.js.map