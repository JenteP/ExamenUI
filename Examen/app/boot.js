System.register(['angular2/platform/browser', './factory.component', "angular2/router"], function(exports_1) {
    var browser_1, factory_component_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (factory_component_1_1) {
                factory_component_1 = factory_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(factory_component_1.Factory, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map