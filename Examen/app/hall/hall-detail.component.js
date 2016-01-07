System.register(['angular2/core', "./hall.service", "angular2/router", "./hall-points.directive", "./viewbox-helper.directive"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hall_service_1, router_1, hall_points_directive_1, viewbox_helper_directive_1;
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
                    this._hallService.getHall(name).then(function (hall) { return _this.hall = hall; });
                };
                HallDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'hall-detail',
                        inputs: ['hall'],
                        template: "\n            <div class=\"hallDetails\" *ngIf=\"hall\">\n                <h2>{{hall.name}} details!</h2><h4>Oppervlakte: {{hall.surface}}m\u00B2</h4>\n                <h4>Aantal items: {{hall.items.length}}</h4>\n                <h4>Aantal items met actie vereist: {{hall.itemsRequiringAction.length}}</h4>\n\n                <svg [viewBoxHelper]=\"halls\" [hall]=\"hall\" height=\"100%\" width=\"100%\">\n                    <polygon [hallPoints]=\"hall\" [hall]=\"hall\" (click)=\"onSelect(hall)\"/>\n                </svg>\n            </div>\n        ",
                        styles: ["\n        .hallDetails {\n            background-color:#eaeae1;\n        }\n    "],
                        directives: [hall_points_directive_1.HallPointsDirective, viewbox_helper_directive_1.ViewBoxHelperDirective]
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