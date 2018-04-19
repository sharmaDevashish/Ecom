import {Products} from './products';

export class ProductCatlog{
    public PreviousPage:string = null;
    public NextPage:string = null;
    public Status:boolean = false;
    public PageNumber:number = 0;
    public TotalCount:number = 0;
    public Products:Products[] =[]; 
}