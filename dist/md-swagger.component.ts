import { Directive, Component, Input, OnChanges } from '@angular/core';
import { MDSwaggerService } from "./md-swagger.service"

@Component({
    selector: 'md-swagger',
    templateUrl: '<h1>MD SWAGGER</h1>'
})
export class MDSwaggerComponent implements OnChanges {

    public html: string;
    @Input() md_data: string;

    constructor() {
        console.log("Initializing MD SWAGGER");
    }
    ngOnChanges() {
        //this.html = this._m1.convert(this.md_data);
    }
}