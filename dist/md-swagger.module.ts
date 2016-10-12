import { NgModule, ModuleWithProviders }  from "@angular/core";
import { MDSwaggerService } from "./md-swagger.service"
import { MDSwaggerComponent } from "./md-swagger.component"

@NgModule({
    imports:[MDSwaggerComponent, MDSwaggerService],
    providers: [MDSwaggerComponent],
    exports: [MDSwaggerComponent],
})

export class MDSwaggerModule {}