System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var HallService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HallService = (function () {
                function HallService(http) {
                    this.http = null;
                    this._time = 24;
                    this.http = http;
                }
                HallService.prototype.getHalls = function () {
                    return this.http.get(HallService.PATH + 'Halls.json')
                        .map(function (res) { return res.json(); });
                };
                /*getHalls():Promise<Hall[]> {
                    return Promise.resolve(HALLS);
                }*/
                /*getHallsSlowly() {
                    return new Promise<Hall[]>(
                        resolve => setTimeout(()=>resolve(HALLS),2000)
                    );
                }*/
                HallService.prototype.getHall = function (name) {
                    return this.http.get(HallService.PATH + 'hall/' + name + '.json')
                        .map(function (res) { return res.json(); });
                };
                HallService.prototype.postItem = function (item) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    console.log("Posting:");
                    console.log(item);
                    try {
                        this.http.post('wrong', JSON.stringify(item), {
                            headers: headers
                        })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) { return _this.logData(data.id_token); }, function (err) { return _this.logError(err); }, function () { return console.log('Authentication Complete'); });
                    }
                    catch (e) {
                        console.log("Error caught");
                        this.logError(e);
                    }
                };
                HallService.prototype.logError = function (error) {
                    console.log("Error: " + error);
                    console.log(error);
                };
                HallService.prototype.logData = function (data) {
                    console.log("Data: ");
                    console.log(data);
                };
                /*getHall(name: string):Promise<Hall> {
                    return this.getHalls().then(
                        halls =>
                            halls.filter(hall => hall.name == name)[0]
                        );
                }*/
                /*getHallItems(name: string):Item[] {
                    let hallObservable: Observable<Hall> = this.getHall(name);
                    hallObservable.subscribe((hall:Hall) => {
                        return hall.items;
                    });
                    return this.getHall(name)..then(
                        halls =>
                            halls.filter(hall => hall.name == name)[0].items
                    );
                }
            
                getItemFromHall(hallName: string, itemName: string): Observable<Item> {
                    return this.getHallItems(hallName).then(
                        items => items.filter(item => item.name == itemName)[0]
                    );
                }*/
                /*getHallItems(name: string):Promise<Item[]> {
                    return this.getHalls().then(
                        halls =>
                            halls.filter(hall => hall.name == name)[0].items
                    );
                }
            
                getItemFromHall(hallName: string, itemName: string): Promise<Item> {
                    return this.getHallItems(hallName).then(
                        items => items.filter(item => item.name == itemName)[0]
                    );
                }*/
                HallService.prototype.getActionReminderTimer = function () {
                    return Promise.resolve(this._time);
                };
                HallService.prototype.setActionReminderTimer = function (time) {
                    this._time = time;
                };
                HallService.PATH = "back-end/halls/";
                HallService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HallService);
                return HallService;
            })();
            exports_1("HallService", HallService);
        }
    }
});
//# sourceMappingURL=hall.service.js.map