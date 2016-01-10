System.register(['angular2/core', './hall/hall-detail.component', './hall/hall.service', './hall/hall-list.component', './hall/hall-blueprint.component', "angular2/router", "./item/item-detail.component", "./settings/settings.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hall_detail_component_1, hall_service_1, hall_list_component_1, hall_blueprint_component_1, router_1, item_detail_component_1, settings_component_1;
    var Factory;
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
            },
            function (hall_list_component_1_1) {
                hall_list_component_1 = hall_list_component_1_1;
            },
            function (hall_blueprint_component_1_1) {
                hall_blueprint_component_1 = hall_blueprint_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (item_detail_component_1_1) {
                item_detail_component_1 = item_detail_component_1_1;
            },
            function (settings_component_1_1) {
                settings_component_1 = settings_component_1_1;
            }],
        execute: function() {
            Factory = (function () {
                function Factory(_hallService) {
                    this._hallService = _hallService;
                    this.name = 'GoodId';
                }
                Factory.prototype.getHalls = function () {
                    var _this = this;
                    this._hallService.getHalls().then(function (halls) { return _this.halls = halls; });
                };
                Factory.prototype.ngOnInit = function () {
                    this.getHalls();
                };
                Factory = __decorate([
                    core_1.Component({
                        selector: 'factory',
                        template: "\n        <h1>Factory: {{name}}</h1>\n        <nav>\n            <a [routerLink]=\"['List']\">List</a>\n            <a [routerLink]=\"['BluePrint']\">Map</a>\n            <a [routerLink]=\"['Settings']\">Settings</a>\n\n        </nav>\n        <router-outlet></router-outlet>\n    ",
                        directives: [hall_list_component_1.HallListComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [hall_service_1.HallService]
                    }),
                    router_1.RouteConfig([
                        { path: '/list', name: 'List', component: hall_list_component_1.HallListComponent },
                        { path: '/blueprint', name: 'BluePrint', component: hall_blueprint_component_1.HallBluePrintComponent },
                        { path: '/hall/:name', name: 'HallDetail', component: hall_detail_component_1.HallDetailComponent },
                        { path: '/hall/:name/item/:itemname', name: 'ItemDetail', component: item_detail_component_1.ItemDetailComponent },
                        { path: '/settings', name: 'Settings', component: settings_component_1.SettingsComponent }
                    ]), 
                    __metadata('design:paramtypes', [hall_service_1.HallService])
                ], Factory);
                return Factory;
            })();
            exports_1("Factory", Factory);
        }
    }
});
//# sourceMappingURL=factory.component.js.map