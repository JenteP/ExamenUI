System.register(['angular2/core', "./../hall/hall.service", "../action/action-detail.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hall_service_1, action_detail_component_1;
    var ItemDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hall_service_1_1) {
                hall_service_1 = hall_service_1_1;
            },
            function (action_detail_component_1_1) {
                action_detail_component_1 = action_detail_component_1_1;
            }],
        execute: function() {
            ItemDetailComponent = (function () {
                function ItemDetailComponent(_hallService) {
                    this._hallService = _hallService;
                }
                ItemDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'item-detail',
                        inputs: ['item'],
                        template: "\n            <div class=\"itemDetails\" *ngIf=\"item\">\n                <h4>{{item.name}} details!</h4>\n                <div>\n                    <input [(ngModel)]=\"item.name\" placeholder=\"name\">:<input [(ngModel)]=\"item.productNumber\" placeholder=\"number\">\n                </div>\n                <div class=\"actions\">\n                    <h5>Last Action:</h5>\n                    <action-detail [action]=\"item.lastAction\"></action-detail>\n                    <h5>Next Action:</h5>\n                    <action-detail [action]=\"item.nextAction\"></action-detail>\n                </div>\n        </div>\n        ",
                        directives: [action_detail_component_1.ActionDetailComponent],
                        styles: ["\n        .itemDetails {\n            background-color:#f5f5f0;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [hall_service_1.HallService])
                ], ItemDetailComponent);
                return ItemDetailComponent;
            })();
            exports_1("ItemDetailComponent", ItemDetailComponent);
        }
    }
});
//# sourceMappingURL=item-detail.component.js.map