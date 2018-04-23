import { Component, OnInit,Injector } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, NavigationExtras } from "@angular/router";
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common'; 
import {ActivatedRoute} from '@angular/router';
import { BaseServices } from '../../services/base-services';
import { ProductDetails } from '../../models/productDetails';
import { ProductBaseService } from '../../base-classes/product-base.service';
//import { PageBase } from '@yokogawa-iiot/page-common/base-classes';
//import { EnvironmentProviderBase, ServiceLocatorBase, LogProviderBase, CacheProviderBase } from '@yokogawa-iiot/core/base-classes';


//import { StreamDataResponse, ComponentDataResponse } from '@yokogawa-iiot/core/models';

@Component({
  selector: 'productDetails-page',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent /*extends PageBase*/ implements OnInit {
  
  mockDetails:ProductDetails;
  public USD:boolean = true;
  public EUR:boolean = false;
  public productId;
 /*constructor(
        private router: Router,injector: Injector,
        serviceSelector: ServiceLocatorBase) {
        super(injector, serviceSelector)
    }*/
    constructor(private route: ActivatedRoute, public mockServices:BaseServices, private pbs:ProductBaseService) {
      
     
  }

  ngOnInit() {
    
    this.route.params.subscribe( params => this.productId = params ); 

    console.log(this.productId);
    this.pbs.getProductDetails(this.productId).then(
      (val) => {this.mockDetails = val},
      (err) => console.log(err)
    );
  }

    //OnPageLiveDataReceived(liveData: StreamDataResponse) {}
    
    //OnPageDataReceived(response: ComponentDataResponse) {}

}
