System.register(['angular2/platform/browser', './factory.component'], function(exports_1) {
    var browser_1, factory_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (factory_component_1_1) {
                factory_component_1 = factory_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(factory_component_1.Factory);
        }
    }
});
//# sourceMappingURL=boot.js.map