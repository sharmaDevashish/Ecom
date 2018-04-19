/**
 * @license
 * Copyright Yokogawa Electric Corporation. All Rights Reserved.
 *
 * @yokogawa-iiot/e-comm: e-comm widgets and pages developed by e-comm
 */

import { NgModule } from "@angular/core";
import { ECOMM_MODULE_DEF } from "./e-comm.module.def";

@NgModule(ECOMM_MODULE_DEF)
class EcommModule {
    constructor() {
        console.log("Ecomm Module Initialized!");
    }
}

export { EcommModule };
