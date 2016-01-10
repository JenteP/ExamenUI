System.register(['angular2/core', "./action", "./../hall/hall.service", "./action-type.service", "angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, action_1, hall_service_1, action_type_service_1, core_2;
    var ActionDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (action_1_1) {
                action_1 = action_1_1;
            },
            function (hall_service_1_1) {
                hall_service_1 = hall_service_1_1;
            },
            function (action_type_service_1_1) {
                action_type_service_1 = action_type_service_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            ActionDetailComponent = (function () {
                function ActionDetailComponent(_hallService, _actionTypeService) {
                    var _this = this;
                    this._hallService = _hallService;
                    this._actionTypeService = _actionTypeService;
                    this.types = [];
                    //this._actionTypeService.getActionTypes().then(acts => this.setActionTypes(acts));
                    this._actionTypeService.getActionTypes().subscribe(function (actionTypes) { return _this.setActionTypes(actionTypes); });
                }
                Object.defineProperty(ActionDetailComponent.prototype, "action", {
                    set: function (action) {
                        this._action = action;
                    },
                    enumerable: true,
                    configurable: true
                });
                ActionDetailComponent.prototype.setActionTypes = function (actionTypes) {
                    for (var i = 0; i < actionTypes.length; i++) {
                        this.types.push(actionTypes[i].name);
                    }
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', action_1.Action), 
                    __metadata('design:paramtypes', [action_1.Action])
                ], ActionDetailComponent.prototype, "action", null);
                ActionDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'action-detail',
                        template: "\n            <div class=\"actionDetails\" *ngIf=\"_action\">\n                <label for=\"date\">Date</label>\n                <input id=\"date\" type=\"datetime-local\" [(ngModel)]=\"_action.date\">\n\n                <label for=\"type\">Type</label>\n                <select id=\"type\" [(ngModel)]=\"_action.type\">\n                    <option *ngFor=\"#type of types\">{{type}}</option>\n                </select>\n\n                <label for=\"descriptionDetail\">Description</label>\n                <textarea id=\"descriptionDetail\" [(ngModel)]=\"_action.description\" rows=\"4\" cols=\"30\"></textarea>\n\n            </div>\n        ",
                        styles: ["\n        .actionDetails {\n            display:block;\n            margin: 0;\n            padding: 0.2em;\n            border: solid 1px lightgray;\n        }\n\n        .detail {\n            margin: 0;\n            padding: 0.2em;\n            width: 96%;\n            max-width: 96%;\n        }\n\n        input {\n            margin: 0;\n            padding: 0;\n            width: 100%;\n            max-width: 100%;\n        }\n\n        select {\n            margin: 0;\n            padding: 0;\n            width: 100%;\n            max-width: 100%;\n        }\n\n        textarea {\n            margin: 0;\n            padding: 0;\n            width: 100%;\n            max-width: 100%;\n        }\n    "],
                        providers: [action_type_service_1.ActionTypeService]
                    }), 
                    __metadata('design:paramtypes', [hall_service_1.HallService, action_type_service_1.ActionTypeService])
                ], ActionDetailComponent);
                return ActionDetailComponent;
            })();
            exports_1("ActionDetailComponent", ActionDetailComponent);
        }
    }
});
//# sourceMappingURL=action-detail.component.js.map