import { Component, OnInit,Injector } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, NavigationExtras } from "@angular/router";
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common'; 
import {ActivatedRoute} from "@angular/router";
//import { PageBase } from '@yokogawa-iiot/page-common/base-classes';
//import { EnvironmentProviderBase, ServiceLocatorBase, LogProviderBase, CacheProviderBase } from '@yokogawa-iiot/core/base-classes';


//import { StreamDataResponse, ComponentDataResponse } from '@yokogawa-iiot/core/models';

@Component({
  selector: 'productDetails-page',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.css']
})


export class ProductDetailsComponent /*extends PageBase*/ implements OnInit {
  
  mockDetails = new Object;
  public USD:boolean = true;
  public EUR:boolean = false;
  /*constructor(
        private router: Router,injector: Injector,
        serviceSelector: ServiceLocatorBase) {
        super(injector, serviceSelector)
    }*/
    constructor(private route: ActivatedRoute) {
      this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit() {

    this.mockDetails = {
      Id:1,
      Name:"product1",
      SKU:"SKU101",
      Category:"BaseDevice",
      DescriptionEnglish:"DescriptionEnglish",
      DescriptionJapanese:"DescriptionJapanese",
      ManufacturersProductCode:"MF101",
      YokogawaMSCode:"MF101",
      AllowFeatureChanges:false,
      LastUpdatedDate:1524015180,
      ProductRatePlan:[{
        Id:1,
        Name:"plan1",
        Description:"Description",
        ProductRatePlanCharge:[  {
          id: "2c92c0f9626c87e2016274dc4fae0741",
          name: "Recorder (Usage)",
          type: "Usage",
          model: "PerUnit",
          uom: "Tester",
          billingDay: "DefaultFromCustomer",
          listPriceBase: "",
          billingTiming: "",
          billingPeriod: "Month",
          description: "",
          pricing: [
            {
              currency: "USD",
              price: 99
            }
          ]
        },
        {
          id: "2c92c0f8626c796b016274db3eb711e7",
          name: "Recorder (Recurring)",
          type: "Recurring",
          model: "FlatFee",
          uom: "",
          billingDay: "DefaultFromCustomer",
          listPriceBase: "Per_Month",
          billingTiming: "IN_ADVANCE",
          billingPeriod: "Month",
          description: "",
          pricing: [
            {
              currency: "USD",
              price: 100
            }
          ]
        },
        {
          id: "2c92c0f8626c796b016274da308e1062",
          name: "Recorder (On Time)",
          type: "OneTime",
          model: "FlatFee",
          uom: "",
          billingDay: "",
          listPriceBase: "",
          billingTiming: "",
          billingPeriod: "",
          description: "Recorder (On Time)",
          pricing: [
            {
              currency: "USD",
              price: 100
            }
          ]
        }
      ]
    }],
    ProductFeature:[{
        Id:1,
        Name:"Feature1",
        Code:"Code1",
        Description:"Product Description",
        Status:"Status1"
      }]
    }
  }

    //OnPageLiveDataReceived(liveData: StreamDataResponse) {}
    
    //OnPageDataReceived(response: ComponentDataResponse) {}

}
