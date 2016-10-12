import { OnChanges } from '@angular/core';
export declare class MDSwaggerService {
    marked: any;
    private md;
    constructor();
    convert(markdown: string): string;
}
export declare class MDSwaggerComponent implements OnChanges {
    html: string;
    md_data: string;
    constructor();
    ngOnChanges(): void;
}
export declare class MDSwaggerModule {
}
