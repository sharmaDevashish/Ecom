import {ProductRatePlanCharge} from './productRatePlanCharge';

export class ProductRatePlan{
    public Id:string = null;
    public Name:string = null;
    public Description:string = null;
    public ProductRatePlanCharge:ProductRatePlanCharge[] = [];
}