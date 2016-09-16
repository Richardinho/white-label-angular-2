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
var RefinementComponent = (function () {
    function RefinementComponent() {
        this.criteriaChanged = new core_1.EventEmitter();
    }
    RefinementComponent.prototype.onDynastySelect = function (dynasty) {
        this.criteriaChanged.emit({ dynasty: dynasty });
    };
    RefinementComponent.prototype.onSortSelect = function (sort) {
        console.log(sort);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RefinementComponent.prototype, "criteria", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RefinementComponent.prototype, "criteriaChanged", void 0);
    RefinementComponent = __decorate([
        core_1.Component({
            selector: 'refinements',
            templateUrl: 'app/refinements/refinements.html',
            styleUrls: ['app/refinements/refinements.css']
        }), 
        __metadata('design:paramtypes', [])
    ], RefinementComponent);
    return RefinementComponent;
}());
exports.RefinementComponent = RefinementComponent;
;
//# sourceMappingURL=refinement.component.js.map