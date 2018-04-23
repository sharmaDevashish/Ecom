/**
 * @license
 * Copyright Yokogawa Electric Corporation. All Rights Reserved.
 *
 * @yokogawa-iiot/isobar: Isobar Module Definition
 */

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpModule } from '@angular/http';

import { EcommRoutingModule } from "./e-comm.module.routing";
import { ProductCatlogComponent } from "./components/productCatlog/product-catlog.component";
import { ProductDetailsComponent } from "./components/productDetails/product-details.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { BaseServices } from "./services/base-services";
import { ProductBaseService } from "./base-classes/product-base.service";
import { SubscriptionBaseService } from "./base-classes/subscription-base.service";
import { SubscriptionService } from "./services/subscription.service";
import { ProductService } from "./services/product-catalog.service";
import { ProductCatlog } from "./models/productsCatlog";

const ECOMM_MODULE_DEF: any = {
    imports: [
        FormsModule,
        CommonModule,
        EcommRoutingModule,
        HttpModule
    ],
    declarations: [
        ProductCatlogComponent,
        ProductDetailsComponent,
        PaginationComponent
    ],
    exports: [
    ],
    providers: [
        PaginationComponent,
        BaseServices,
        { provide: ProductBaseService, useClass: ProductService },
        { provide: SubscriptionBaseService, useClass: SubscriptionService }
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
