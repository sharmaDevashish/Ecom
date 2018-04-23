/**
 * @license
 * Copyright Yokogawa Electric Corporation. All Rights Reserved.
 *
 * @yokogawa-iiot/isobar: Isobar Module Definition
 */

import { ProductBaseService } from '../base-classes';
import { ProductCatlog } from '../models/productsCatlog';
import { ProductDetails } from '../models/productDetails';
import { Injectable } from '@angular/core';
import { BaseServices } from './base-services';

const URL = "http://subscriptionapiservices.azurewebsites.net/api/Products";

@Injectable()
class ProductService implements ProductBaseService {
    constructor(
        private bs: BaseServices
    ) { }

    getProductCatalog(): Promise<ProductCatlog> {
        return new Promise<ProductCatlog>((resolve, reject) => {
            this.bs.get(URL).subscribe(
                response => {
                    resolve(response.json() as ProductCatlog);
                },
                failure => {
                    reject(new ProductCatlog());
                }
            )
        });
    }

    getProductDetails(id): Promise<ProductDetails> {
        return new Promise<ProductDetails>((resolve, reject) => {
            this.bs.get(URL+"/"+id).subscribe(
                response => {
                    resolve(response.json() as ProductDetails);
                },
                failure => {
                    reject(new ProductCatlog());
                }
            )
        });
    }
}

export { ProductService };

