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
var core_2 = require('@angular/core');
// import * as marked from 'marked';
var core_3 = require('@angular/core');
var marked = require("./lib/marked.js");
var MDSwaggerService = (function () {
    function MDSwaggerService() {
        this.md = marked;
    }
    MDSwaggerService.prototype.convert = function (markdown) {
        //return markdown;
        //return marked.parse("# h");
        console.log("converting" + markdown);
        return this.md.parse(markdown);
    };
    MDSwaggerService = __decorate([
        core_3.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MDSwaggerService);
    return MDSwaggerService;
}());
exports.MDSwaggerService = MDSwaggerService;
var MDSwaggerComponent = (function () {
    function MDSwaggerComponent() {
        console.log("hello");
    }
    MDSwaggerComponent.prototype.ngOnChanges = function () {
        //this.html = this._m1.convert(this.md_data);
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MDSwaggerComponent.prototype, "md_data", void 0);
    MDSwaggerComponent = __decorate([
        core_2.Component({
            selector: 'md-swagger',
            templateUrl: 'md-swagger.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MDSwaggerComponent);
    return MDSwaggerComponent;
}());
exports.MDSwaggerComponent = MDSwaggerComponent;
var MDSwaggerModule = (function () {
    function MDSwaggerModule() {
    }
    MDSwaggerModule = __decorate([
        core_1.NgModule({
            imports: [MDSwaggerComponent, MDSwaggerService],
            providers: [MDSwaggerComponent],
            exports: [MDSwaggerComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], MDSwaggerModule);
    return MDSwaggerModule;
}());
exports.MDSwaggerModule = MDSwaggerModule;
//# sourceMappingURL=md-swagger.module.js.map