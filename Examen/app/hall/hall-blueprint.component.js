System.register(['angular2/core', './hall.service', "./hall-quickview.component", "angular2/router", "./hall-points.directive", "./viewbox-helper.directive", "./hall-title.directive"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hall_service_1, hall_quickview_component_1, router_1, hall_points_directive_1, viewbox_helper_directive_1, hall_title_directive_1;
    var HallBluePrintComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hall_service_1_1) {
                hall_service_1 = hall_service_1_1;
            },
            function (hall_quickview_component_1_1) {
                hall_quickview_component_1 = hall_quickview_component_1_1;
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
            function (hall_title_directive_1_1) {
                hall_title_directive_1 = hall_title_directive_1_1;
            }],
        execute: function() {
            HallBluePrintComponent = (function () {
                function HallBluePrintComponent(_hallService, _router) {
                    this._hallService = _hallService;
                    this._router = _router;
                    this.actionReminderTime = 86400000;
                }
                HallBluePrintComponent.prototype.getHalls = function () {
                    var _this = this;
                    this._hallService.getHalls().then(function (halls) { return _this.halls = halls; });
                };
                HallBluePrintComponent.prototype.onSelect = function (hall) {
                    this._router.navigate(['HallDetail', { name: hall.name }]);
                };
                HallBluePrintComponent.prototype.ngOnInit = function () {
                    this.getHalls();
                };
                HallBluePrintComponent = __decorate([
                    core_1.Component({
                        selector: 'hall-blueprint',
                        template: "\n        <div class=\"hallInfo\">\n            <ul>\n                <li *ngFor=\"#hall of halls\" (click)=\"onSelect(hall)\">\n                    <hall-quickview [hall]=\"hall\"></hall-quickview>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"hallMap\">\n            <svg [viewBoxHelper]=\"halls\" [halls]=\"halls\" height=\"100%\" width=\"100%\">\n                <g *ngFor=\"#hall of halls\" (click)=\"onSelect(hall)\">\n                    <polygon [hallPoints]=\"hall\" [hall]=\"hall\" [offset]=\"true\"/>\n                    <text [hallTitle]=\"hall\" [hall]=\"hall\" [offset]=\"true\" font-family=\"Verdana\" font-size=\"5\">{{hall.name}}</text>\n                </g>\n            </svg>\n        </div>\n    ",
                        styles: ["\n        polygon {\n            cursor: pointer;\n        }\n\n        text {\n            cursor:pointer\n        }\n\n        li {\n            list-style-type:none;\n        }\n\n        .hallInfo {\n            width: 40%;\n            float: left;\n        }\n\n        .hallMap {\n            width: 55%;\n            float: right;\n        }\n    "],
                        directives: [hall_quickview_component_1.HallQuickViewComponent, hall_points_directive_1.HallPointsDirective, viewbox_helper_directive_1.ViewBoxHelperDirective, hall_title_directive_1.HallTitleDirective],
                        providers: [hall_service_1.HallService]
                    }), 
                    __metadata('design:paramtypes', [hall_service_1.HallService, router_1.Router])
                ], HallBluePrintComponent);
                return HallBluePrintComponent;
            })();
            exports_1("HallBluePrintComponent", HallBluePrintComponent);
        }
    }
});
//# sourceMappingURL=hall-blueprint.component.js.map