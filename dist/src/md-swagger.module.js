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
var core_1 = require("@angular/core");
var md_swagger_service_1 = require("./md-swagger.service");
var md_swagger_component_1 = require("./md-swagger.component");
var MDSwaggerModule = (function () {
    function MDSwaggerModule() {
    }
    MDSwaggerModule = __decorate([
        core_1.NgModule({
            imports: [md_swagger_component_1.MDSwaggerComponent, md_swagger_service_1.MDSwaggerService],
            providers: [md_swagger_component_1.MDSwaggerComponent],
            exports: [md_swagger_component_1.MDSwaggerComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], MDSwaggerModule);
    return MDSwaggerModule;
}());
exports.MDSwaggerModule = MDSwaggerModule;
//# sourceMappingURL=md-swagger.module.js.map