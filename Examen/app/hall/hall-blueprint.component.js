System.register(['angular2/core', './hall-detail.component', './hall.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hall_detail_component_1, hall_service_1;
    var HallBluePrintComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hall_detail_component_1_1) {
                hall_detail_component_1 = hall_detail_component_1_1;
            },
            function (hall_service_1_1) {
                hall_service_1 = hall_service_1_1;
            }],
        execute: function() {
            HallBluePrintComponent = (function () {
                function HallBluePrintComponent(_hallService) {
                    this._hallService = _hallService;
                    this.actionReminderTime = 86400000;
                }
                HallBluePrintComponent.prototype.getHalls = function () {
                    var _this = this;
                    this._hallService.getHalls().then(function (halls) { return _this.halls = halls; });
                };
                HallBluePrintComponent.prototype.ngOnInit = function () {
                    this.getHalls();
                };
                HallBluePrintComponent = __decorate([
                    core_1.Component({
                        selector: 'hall-blueprint',
                        template: "\n        <h3>Hall Map:</h3>\n        <div class=\"halls\">\n            <div *ngFor=\"#hall of halls\">\n                <hall-detail [hall]=\"hall\"></hall-detail>\n            </div>\n        </div>\n    ",
                        directives: [hall_detail_component_1.HallDetailComponent],
                        providers: [hall_service_1.HallService]
                    }), 
                    __metadata('design:paramtypes', [hall_service_1.HallService])
                ], HallBluePrintComponent);
                return HallBluePrintComponent;
            })();
            exports_1("HallBluePrintComponent", HallBluePrintComponent);
        }
    }
});
//# sourceMappingURL=hall-blueprint.component.js.map