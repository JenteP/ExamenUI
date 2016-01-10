System.register(['angular2/core', './mock-categories'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_categories_1;
    var CategoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_categories_1_1) {
                mock_categories_1 = mock_categories_1_1;
            }],
        execute: function() {
            CategoryService = (function () {
                function CategoryService() {
                }
                CategoryService.prototype.getCategories = function () {
                    return Promise.resolve(mock_categories_1.CATEGORIES);
                };
                CategoryService.prototype.getCategory = function (name) {
                    return this.getCategories().then(function (cats) {
                        return cats.filter(function (cat) { return cat.name == name; })[0];
                    });
                };
                CategoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CategoryService);
                return CategoryService;
            })();
            exports_1("CategoryService", CategoryService);
        }
    }
});
//# sourceMappingURL=category.service.js.map