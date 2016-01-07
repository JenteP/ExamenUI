System.register(['angular2/core', './mock-halls'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_halls_1;
    var HallService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_halls_1_1) {
                mock_halls_1 = mock_halls_1_1;
            }],
        execute: function() {
            HallService = (function () {
                function HallService() {
                }
                HallService.prototype.getHalls = function () {
                    return Promise.resolve(mock_halls_1.HALLS);
                };
                HallService.prototype.getHallsSlowly = function () {
                    return new Promise(function (resolve) { return setTimeout(function () { return resolve(mock_halls_1.HALLS); }, 2000); });
                };
                HallService.prototype.getHall = function (name) {
                    return this.getHalls().then(function (halls) {
                        return halls.filter(function (hall) { return hall.name == name; })[0];
                    });
                };
                HallService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HallService);
                return HallService;
            })();
            exports_1("HallService", HallService);
        }
    }
});
//# sourceMappingURL=hall.service.js.map