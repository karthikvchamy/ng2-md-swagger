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