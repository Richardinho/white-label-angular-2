"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require('./appcomponent/app.component');
var banner_component_1 = require('./banner/banner.component');
var refinement_component_1 = require('./refinements/refinement.component');
var result_list_component_1 = require('./result-list/result-list.component');
var routing_1 = require('./routing');
var search_page_component_1 = require('./search-page/search-page.component');
var emperor_page_component_1 = require('./emperor-page/emperor-page.component');
var emperor_card_component_1 = require('./result-list/emperor-card.component');
var data_service_1 = require('./providers/data-service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                routing_1.routing,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                banner_component_1.BannerComponent,
                result_list_component_1.ResultListComponent,
                refinement_component_1.RefinementComponent,
                search_page_component_1.SearchPageComponent,
                emperor_page_component_1.EmperorPageComponent,
                emperor_card_component_1.EmperorCardComponent
            ],
            providers: [
                data_service_1.DataService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map