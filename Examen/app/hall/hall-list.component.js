System.register(['angular2/core', './hall.service', "./hall-quickview.component", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hall_service_1, hall_quickview_component_1, router_1;
    var HallListComponent;
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
            }],
        execute: function() {
            HallListComponent = (function () {
                function HallListComponent(_hallService, _router) {
                    this._hallService = _hallService;
                    this._router = _router;
                    this.actionReminderTime = 86400000;
                }
                HallListComponent.prototype.onSelect = function (hall) {
                    this._router.navigate(['HallDetail', { name: hall.name }]);
                };
                HallListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //this._hallService.getHalls().then(halls => this.halls = halls);
                    this._hallService.getHalls().subscribe(function (halls) { return _this.halls = halls; });
                };
                HallListComponent = __decorate([
                    core_1.Component({
                        selector: 'hall-list',
                        template: "\n        <div class=\"halls\">\n            <div class=\"hallOverview\" *ngFor=\"#hall of halls\"\n                (click)=\"onSelect(hall)\">\n                <hall-quickview [hall]=\"hall\"></hall-quickview>\n            </div>\n        </div>\n    ",
                        styles: ["\n        .hallOverview {\n            padding:0;\n            margin:0;\n        }\n\n        .halls {\n            padding:0;\n        }\n\n        .hallOverview {\n            display:inline-block;\n            max-width: 20em;\n            width:100%;\n        }\n\n    "],
                        directives: [hall_quickview_component_1.HallQuickViewComponent],
                        providers: [hall_service_1.HallService]
                    }), 
                    __metadata('design:paramtypes', [hall_service_1.HallService, router_1.Router])
                ], HallListComponent);
                return HallListComponent;
            })();
            exports_1("HallListComponent", HallListComponent);
        }
    }
});
//# sourceMappingURL=hall-list.component.js.map