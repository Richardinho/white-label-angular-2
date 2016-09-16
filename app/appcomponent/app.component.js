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
var data_service_1 = require('../providers/data-service');
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.criteria = {};
    }
    AppComponent.prototype.refreshData = function () {
        var _this = this;
        this.dataService.getData(this.queryStringFromCriteria(this.criteria))
            .then(function (data) {
            _this.results = data.results;
            _this.criteria = data.criteria;
        });
    };
    AppComponent.prototype.queryStringFromCriteria = function (criteria) {
        var _this = this;
        var queryParams = [
            'sortBy',
            'dynasty',
            'yearFrom',
            'yearTo'
        ];
        var self = this;
        return queryParams.reduce(function (memo, key, index) {
            var amper = (index > 0) ? '&' : '';
            if (criteria[key]) {
                return memo + amper + _this.decamelize(key, '-') + '=' + criteria[key];
            }
            else {
                return memo;
            }
        }, '?');
    };
    //  todo: should use actual node module rather than this c&p!
    AppComponent.prototype.decamelize = function (str, sep) {
        if (typeof str !== 'string') {
            throw new TypeError('Expected a string');
        }
        sep = typeof sep === 'undefined' ? '_' : sep;
        return str
            .replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
            .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
            .toLowerCase();
    };
    AppComponent.prototype.onCriteriaChange = function (val) {
        this.criteria = Object.assign(this.criteria, val);
        this.refreshData();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/appcomponent/app.html',
            styleUrls: ['app/appcomponent/app.css']
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map