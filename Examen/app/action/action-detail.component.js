System.register(['angular2/core', "./../hall/hall.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hall_service_1;
    var ActionDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hall_service_1_1) {
                hall_service_1 = hall_service_1_1;
            }],
        execute: function() {
            ActionDetailComponent = (function () {
                function ActionDetailComponent(_hallService) {
                    this._hallService = _hallService;
                }
                ActionDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'action-detail',
                        inputs: ['action'],
                        template: "\n            <div class=\"actionDetails\" *ngIf=\"action\">\n                <input [(ngModel)]=\"action.description\" placeholder=\"name\">\n            </div>\n        ",
                        styles: ["\n    "]
                    }), 
                    __metadata('design:paramtypes', [hall_service_1.HallService])
                ], ActionDetailComponent);
                return ActionDetailComponent;
            })();
            exports_1("ActionDetailComponent", ActionDetailComponent);
        }
    }
});
//# sourceMappingURL=action-detail.component.js.map