"use strict";
var router_1 = require('@angular/router');
var search_page_component_1 = require('./search-page/search-page.component');
var emperor_page_component_1 = require('./emperor-page/emperor-page.component');
var homePageRoute = {
    path: 'home',
    component: search_page_component_1.SearchPageComponent
};
var emperorPageRoute = {
    path: 'emperor',
    component: emperor_page_component_1.EmperorPageComponent
};
var defaultRoute = {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
};
var appRoutes = [
    homePageRoute,
    emperorPageRoute,
    defaultRoute
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routing.js.map