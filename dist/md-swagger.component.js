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
var MDSwaggerComponent = (function () {
    function MDSwaggerComponent() {
        console.log("Initializing MD SWAGGER");
    }
    MDSwaggerComponent.prototype.ngOnChanges = function () {
        //this.html = this._m1.convert(this.md_data);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MDSwaggerComponent.prototype, "md_data", void 0);
    MDSwaggerComponent = __decorate([
        core_1.Component({
            selector: 'md-swagger',
            templateUrl: '<h1>MD SWAGGER</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], MDSwaggerComponent);
    return MDSwaggerComponent;
}());
exports.MDSwaggerComponent = MDSwaggerComponent;
//# sourceMappingURL=md-swagger.component.js.map