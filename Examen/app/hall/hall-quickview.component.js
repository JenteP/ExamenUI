System.register(['angular2/core', "./hall.service", "angular2/router", "angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hall_service_1, router_1, core_2;
    var HallQuickViewComponent;
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
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            HallQuickViewComponent = (function () {
                function HallQuickViewComponent(_hallService, _router, _routeParams) {
                    this._hallService = _hallService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                Object.defineProperty(HallQuickViewComponent.prototype, "hall", {
                    set: function (hall) {
                        this._hall = hall;
                        this.defineItemsWithAction();
                    },
                    enumerable: true,
                    configurable: true
                });
                HallQuickViewComponent.prototype.defineItemsWithAction = function () {
                    var _this = this;
                    this._hallService.getActionReminderTimer().then(function (time) {
                        _this.time = time;
                        _this.getItemsWithAction(_this._hall);
                    });
                };
                HallQuickViewComponent.prototype.getItemsWithAction = function (hall) {
                    if (hall != null) {
                        this.itemsWithAction = [];
                        var upperDate = this.getUpperDate();
                        for (var i = 0; i < hall.items.length; i++) {
                            var itemDate = new Date(hall.items[i].nextAction.date);
                            if (itemDate < upperDate) {
                                this.itemsWithAction.push(hall.items[i]);
                            }
                        }
                    }
                };
                HallQuickViewComponent.prototype.getUpperDate = function () {
                    var date = new Date();
                    var milisToAdd = this.time * 60 * 60 * 1000;
                    date.setTime(date.getTime() + milisToAdd);
                    return date;
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], HallQuickViewComponent.prototype, "hall", null);
                HallQuickViewComponent = __decorate([
                    core_1.Component({
                        selector: 'hall-quickview',
                        template: "\n            <div class=\"hallQuickView\" *ngIf=\"_hall\">\n                <span [style.color]=\"_hall.color\">{{_hall.name}}:</span>\n                <ul>\n                    <li>Oppervlakte: {{_hall.surface}}m\u00B2</li>\n                    <li>Aantal items: {{_hall.items.length}}</li>\n                    <li *ngIf=\"itemsWithAction\">Aantal items met actie: {{itemsWithAction.length}}</li>\n                </ul>\n            </div>\n        ",
                        styles: ["\n        .hallQuickView {\n            border:solid 1px #eaeae1;\n            cursor: pointer;\n        }\n\n        .hallQuickView:hover {\n            background-color: lightgray;\n            color: white;\n        }\n\n        li {\n            list-style-type: none;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [hall_service_1.HallService, router_1.Router, router_1.RouteParams])
                ], HallQuickViewComponent);
                return HallQuickViewComponent;
            })();
            exports_1("HallQuickViewComponent", HallQuickViewComponent);
        }
    }
});
//# sourceMappingURL=hall-quickview.component.js.map