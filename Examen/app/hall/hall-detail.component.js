System.register(['angular2/core', "./hall.service", "./../item/item-detail.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hall_service_1, item_detail_component_1;
    var HallDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hall_service_1_1) {
                hall_service_1 = hall_service_1_1;
            },
            function (item_detail_component_1_1) {
                item_detail_component_1 = item_detail_component_1_1;
            }],
        execute: function() {
            HallDetailComponent = (function () {
                function HallDetailComponent(_hallService) {
                    this._hallService = _hallService;
                }
                HallDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'hall-detail',
                        inputs: ['hall'],
                        template: "\n            <div class=\"hallDetails\" *ngIf=\"hall\">\n                <h2>{{hall.name}} details!</h2>\n                <!--\n                <div class=\"hallDetail\">\n                    <input [(ngModel)]=\"hall.name\" placeholder=\"name\">:<input [(ngModel)]=\"hall.surface\" placeholder=\"surface\">m\u00B2\n                </div>\n                -->\n                <h4>Oppervlakte: {{hall.surface}}m\u00B2</h4>\n                <h4>Aantal items: {{hall.items.length}}</h4>\n                <h4>Aantal items met actie vereist: {{hall.itemsRequiringAction.length}}</h4>\n\n                <!--\n                <h4>Item details (<span>{{hall.items.length}}</span>):</h4>\n                <div class=\"itemDetail\" *ngFor=\"#item of hall.items\">\n                    <item-detail [item]=\"item\"></item-detail>\n                </div>\n                <h4>Items with actions details (<span>{{hall.itemsRequiringAction.length}}</span>):</h4>\n                <div class=\"itemDetail\" *ngFor=\"#item of hall.itemsRequiringAction\">\n                    <item-detail [item]=\"item\"></item-detail>\n                </div>\n                -->\n            </div>\n        ",
                        directives: [item_detail_component_1.ItemDetailComponent],
                        styles: ["\n        .hallDetails {\n            background-color:#eaeae1;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [hall_service_1.HallService])
                ], HallDetailComponent);
                return HallDetailComponent;
            })();
            exports_1("HallDetailComponent", HallDetailComponent);
        }
    }
});
//# sourceMappingURL=hall-detail.component.js.map