import {Pricing} from './pricing';

export class ProductRatePlanCharge{
    public Id:string = null;
    public Name:string = null;
    public Description:string = null;
    public Type:string = null;
    public Model:string = null;
    public UOM:string = null;
    public Pricing:Pricing[] = [];
}