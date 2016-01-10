System.register(['angular2/core', "./../hall/hall.service", "../action/action-detail.component", "angular2/router", "./category.service", "../action/action"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hall_service_1, action_detail_component_1, router_1, category_service_1, action_1;
    var ItemDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hall_service_1_1) {
                hall_service_1 = hall_service_1_1;
            },
            function (action_detail_component_1_1) {
                action_detail_component_1 = action_detail_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (action_1_1) {
                action_1 = action_1_1;
            }],
        execute: function() {
            ItemDetailComponent = (function () {
                function ItemDetailComponent(_hallService, _categoryService, _router, _routeParams) {
                    var _this = this;
                    this._hallService = _hallService;
                    this._categoryService = _categoryService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.categories = [];
                    this._categoryService.getCategories().then(function (cats) { return _this.setCategories(cats); });
                }
                ItemDetailComponent.prototype.setCategories = function (categories) {
                    for (var i = 0; i < categories.length; i++) {
                        this.categories.push(categories[i].name);
                    }
                };
                ItemDetailComponent.prototype.onActionDone = function (action) {
                    this.item.lastAction = action;
                    this.item.nextAction = new action_1.Action();
                };
                ItemDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var hallName = this._routeParams.get('name');
                    var itemName = this._routeParams.get('itemname');
                    this._hallService.getItemFromHall(hallName, itemName).then(function (item) { return _this.item = item; });
                };
                ItemDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'item-detail',
                        inputs: ['item'],
                        template: "\n            <div class=\"itemDetails\" *ngIf=\"item\">\n                <h4>{{item.name}}</h4>\n                <div>\n                    <input [(ngModel)]=\"item.name\" placeholder=\"name\">\n                </div>\n                <div>\n                    <input [(ngModel)]=\"item.productNumber\">\n                </div>\n                <div>\n                    <select [(ngModel)]=\"item.category\">\n                        <option *ngFor=\"#category of categories\">{{category}}</option>\n                    </select>\n                </div>\n                <div>\n                    <input [(ngModel)]=\"item.description\">\n                </div>\n                <div class=\"actions\">\n                    <div class=\"actionDetails\">\n                        <h5>Last action:</h5>\n                        <action-detail [action]=\"item.lastAction\"></action-detail>\n                    </div>\n                    <div class=\"actionDetails\">\n                        <h5>Next action:</h5>\n                        <action-detail [action]=\"item.nextAction\"></action-detail>\n                        <input type=\"button\" (click)=\"onActionDone(item.nextAction)\" value=\"Done\">\n                    </div>\n                </div>\n            </div>\n        ",
                        directives: [action_detail_component_1.ActionDetailComponent],
                        styles: ["\n        .itemDetails {\n            background-color:#f5f5f0;\n        }\n\n        .actionDetails {\n            display: block;\n            width: 90%;\n            max-width: 90%;\n        }\n\n        input {\n            margin-left:5%;\n            width:90%;\n        }\n\n        select {\n            margin-left:5%;\n            width:90%;\n        }\n    "],
                        providers: [category_service_1.CategoryService]
                    }), 
                    __metadata('design:paramtypes', [hall_service_1.HallService, category_service_1.CategoryService, router_1.Router, router_1.RouteParams])
                ], ItemDetailComponent);
                return ItemDetailComponent;
            })();
            exports_1("ItemDetailComponent", ItemDetailComponent);
        }
    }
});
//# sourceMappingURL=item-detail.component.js.map