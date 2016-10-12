import { NgModule, ModuleWithProviders }  from "@angular/core";
import { Directive, Component, Input, OnChanges } from '@angular/core';


// import * as marked from 'marked';
import { Injectable } from '@angular/core';

var marked = require("./lib/marked.js");

@Injectable()
export class MDSwaggerService {
    marked:any;
    private md:any;

    constructor() {
        this.md = marked;
    }

    convert(markdown: string): string {
        //return markdown;
        //return marked.parse("# h");
        console.log("converting"+markdown)
        return this.md.parse(markdown);
    }
}

@Component({
    selector: 'md-swagger',
    templateUrl: 'md-swagger.component.html'
})
export class MDSwaggerComponent implements OnChanges {

    public html: string;
    @Input() md_data: string;

    constructor() {
        console.log("hello");
    }
    ngOnChanges() {
        //this.html = this._m1.convert(this.md_data);
    }
}

@NgModule({
    imports:[MDSwaggerComponent, MDSwaggerService],
    providers: [MDSwaggerComponent],
    exports: [MDSwaggerComponent],
})

export class MDSwaggerModule {}