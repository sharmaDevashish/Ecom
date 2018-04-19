import {ProductRatePlan} from './productRatePlan';
import {ProductFeature} from './productFeature';

export class ProductDetails{
    public Id:string = null;
    public Name:string = null;
    public SKU:string = null;
    public Category:string = null;
    public DescriptionEnglish:string = null;
    public DescriptionJapanese:string = null;
    public ManufacturersCode:string = null;
    public YokogawaMSCode:string = null;
    public AllowFeatureChanges:boolean = false;
    public LastUpdatedDate:any;
    public ProductRatePlan:ProductRatePlan[] = [];
    public ProductFeature:ProductFeature[] = [];
}