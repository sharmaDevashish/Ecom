/**
 * @license
 * Copyright Yokogawa Electric Corporation. All Rights Reserved.
 *
 * @yokogawa-iiot/isobar: Isobar Module Definition
 */

import { ProductCatlog } from "../models/productsCatlog";
import { ProductDetails } from "../models/productDetails";

abstract class ProductBaseService {
    /**
     * 
     */
    abstract getProductCatalog(): Promise<ProductCatlog>;

    /**
     * 
     */
    abstract getProductDetails(id): Promise<ProductDetails>;
}

export { ProductBaseService };