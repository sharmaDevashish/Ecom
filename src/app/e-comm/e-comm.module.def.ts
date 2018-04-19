/**
 * @license
 * Copyright Yokogawa Electric Corporation. All Rights Reserved.
 *
 * @yokogawa-iiot/isobar: Isobar Module Definition
 */

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { EcommRoutingModule } from "./e-comm.module.routing";
import { ProductCatlogComponent } from "./components/productCatlog/productCatlog.component";
import { ProductDetailsComponent } from "./components/productDetails/productDetails.component";
import { PaginationComponent } from "./components/pagination/pagination.component";

const ECOMM_MODULE_DEF: any = {
    imports: [
        FormsModule,
        CommonModule,
        EcommRoutingModule,
        
    ],
    declarations: [
        ProductCatlogComponent,
        ProductDetailsComponent,
        PaginationComponent
    ],
    exports: [
    ],
    providers: [
        PaginationComponent
    ],
    entryComponents: [
        ProductCatlogComponent,
        ProductDetailsComponent,
        
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
};

export { ECOMM_MODULE_DEF };
