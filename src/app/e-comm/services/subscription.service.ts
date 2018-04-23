/**
 * @license
 * Copyright Yokogawa Electric Corporation. All Rights Reserved.
 *
 * @yokogawa-iiot/isobar: Isobar Module Definition
 */

import { SubscriptionBaseService } from '../base-classes/subscription-base.service';
import { BaseServices } from './base-services';
import { Injectable } from '@angular/core';

@Injectable()
class SubscriptionService implements SubscriptionBaseService {
    constructor(
        private bs: BaseServices
    ) { }

}

export { SubscriptionService };

