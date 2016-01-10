System.register(['angular2/core', "./hall.service", "angular2/router", "./hall-points.directive", "./viewbox-helper.directive", "../item/item-circle.directive", "../item/image-helper.directive"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hall_service_1, router_1, hall_points_directive_1, viewbox_helper_directive_1, item_circle_directive_1, image_helper_directive_1;
    var HallDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hall_service_1_1) {
                hall_service_1 = hall_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hall_points_directive_1_1) {
                hall_points_directive_1 = hall_points_directive_1_1;
            },
            function (viewbox_helper_directive_1_1) {
                viewbox_helper_directive_1 = viewbox_helper_directive_1_1;
            },
            function (item_circle_directive_1_1) {
                item_circle_directive_1 = item_circle_directive_1_1;
            },
            function (image_helper_directive_1_1) {
                image_helper_directive_1 = image_helper_directive_1_1;
            }],
        execute: function() {
            HallDetailComponent = (function () {
                function HallDetailComponent(_hallService, _router, _routeParams) {
                    this._hallService = _hallService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                HallDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var name = this._routeParams.get('name');
                    this._hallService.getActionReminderTimer().then(function (time) { return _this.time = time; });
                    //this._hallService.getHall(name).then(hall => this.hall = hall).then(hall => this.getItemsWithAction(hall));
                    this._hallService.getHall(name).subscribe(function (hall) {
                        _this.hall = hall;
                        _this.getItemsWithAction(_this.hall);
                    });
                };
                HallDetailComponent.prototype.getItemsWithAction = function (hall) {
                    if (this.hall != null) {
                        this.itemsWithAction = [];
                        var upperDate = this.getUpperDate();
                        for (var i = 0; i < this.hall.items.length; i++) {
                            var itemDate = new Date(this.hall.items[i].nextAction.date);
                            if (itemDate < upperDate) {
                                this.itemsWithAction.push(this.hall.items[i]);
                            }
                        }
                    }
                };
                HallDetailComponent.prototype.getUpperDate = function () {
                    var date = new Date();
                    var milisToAdd = this.time * 60 * 60 * 1000;
                    date.setTime(date.getTime() + milisToAdd);
                    return date;
                };
                HallDetailComponent.prototype.onSelect = function (item) {
                    this._router.navigate(['ItemDetail', { name: this.hall.name, itemname: item.name }]);
                };
                HallDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'hall-detail',
                        inputs: ['hall'],
                        template: "\n            <div  *ngIf=\"hall\">\n                <div class=\"hallMap\">\n                    <svg [viewBoxHelper]=\"halls\" [hall]=\"hall\" height=\"100%\" width=\"100%\">\n                        <polygon [hallPoints]=\"hall\" [offset]=\"false\" (click)=\"onSelect(hall)\"/>\n                        <circle *ngFor=\"#item of hall.items\" [itemCircle]=\"item\" [time]=\"time\" [radius]=\"hall.circleRadius\" (click)=\"onSelect(item)\"/>\n                        <image *ngFor=\"#item of hall.items\" [imageHelper]=\"item\" [radius]=\"hall.circleRadius\" (click)=\"onSelect(item)\"></image>\n                    </svg>\n                </div>\n\n                <div class=\"hallInfo\">\n                    <h2>{{hall.name}} details!</h2><h4>Oppervlakte: {{hall.surface}}m\u00B2</h4>\n                    <h4>Aantal items: {{hall.items.length}}</h4>\n                    <h4 *ngIf=\"itemsWithAction\">Aantal items met actie: {{itemsWithAction.length}}</h4>\n                </div>\n            </div>\n        ",
                        styles: ["\n        li {\n            list-style-type:none;\n        }\n\n        circle {\n            cursor: pointer;\n        }\n\n        image {\n            cursor: pointer;\n        }\n\n        .hallMap {\n            width:80%;\n            max-width: 150em;\n            float:left;\n        }\n    "],
                        directives: [hall_points_directive_1.HallPointsDirective, viewbox_helper_directive_1.ViewBoxHelperDirective, item_circle_directive_1.ItemCircleDirective, image_helper_directive_1.ImageHelperDirective]
                    }), 
                    __metadata('design:paramtypes', [hall_service_1.HallService, router_1.Router, router_1.RouteParams])
                ], HallDetailComponent);
                return HallDetailComponent;
            })();
            exports_1("HallDetailComponent", HallDetailComponent);
        }
    }
});
//# sourceMappingURL=hall-detail.component.js.map