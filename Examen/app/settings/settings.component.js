System.register(['angular2/core', "../hall/hall.service"], function(exports_1) {
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
    var SettingsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hall_service_1_1) {
                hall_service_1 = hall_service_1_1;
            }],
        execute: function() {
            SettingsComponent = (function () {
                function SettingsComponent(_hallService) {
                    this._hallService = _hallService;
                }
                SettingsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._hallService.getActionReminderTimer().then(function (time) { return _this.time = time; });
                };
                SettingsComponent.prototype.onSubmit = function () {
                    this._hallService.setActionReminderTimer(this.time);
                };
                SettingsComponent = __decorate([
                    core_1.Component({
                        selector: 'hall-detail',
                        inputs: ['hall'],
                        template: "\n            <h2>Settings</h2>\n            <div>Time:<input [(ngModel)]=\"time\" placeholder=\"time\"><input type=\"submit\" value=\"Submit\" (click)=\"onSubmit()\"></div>\n        ",
                        styles: ["\n\n    "]
                    }), 
                    __metadata('design:paramtypes', [hall_service_1.HallService])
                ], SettingsComponent);
                return SettingsComponent;
            })();
            exports_1("SettingsComponent", SettingsComponent);
        }
    }
});
//# sourceMappingURL=settings.component.js.map