import { Component, OnInit,Injector } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, NavigationExtras } from "@angular/router";
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common'; 
import { element } from 'protractor';
import { PaginationComponent } from '../pagination/pagination.component';
//import { PageBase } from '@yokogawa-iiot/page-common/base-classes';
//import { EnvironmentProviderBase, ServiceLocatorBase, LogProviderBase, CacheProviderBase } from '@yokogawa-iiot/core/base-classes';


//import { StreamDataResponse, ComponentDataResponse } from '@yokogawa-iiot/core/models';

@Component({
  selector: 'productCatlog-page',
  templateUrl: './productCatlog.component.html',
  styleUrls: ['./productCatlog.component.css']
})


export class ProductCatlogComponent /*extends PageBase*/ implements OnInit {

  private elements = document.getElementsByClassName("column") as HTMLCollectionOf<HTMLElement>;
  private list;
  private grid;
  
  /*constructor(
        private router: Router,injector: Injector,
        serviceSelector: ServiceLocatorBase) {
        super(injector, serviceSelector)
    }*/

    mockProducts = [];
    mockProducts1 = [];
    mockProducts2 = [];
    countVar:number = 0;
    pageVar:number = 0;
    perPageVar:number = 0;
    loadingVar:boolean = false;

    constructor(public router:Router, public paginationComponent:PaginationComponent){

      this.mockProducts1 = [
        {
          id:1,
          name:"product1",
          sku:"SKU-00000102",
          description:"Demo1",
          category:"Base Products 1",
          productDescriptionEnglish:"Recorder Service for Billing Demo 1"
        },
        {
          id:2,
          name:"product2",
          sku:"SKU-00000103",
          description:"Demo2",
          category:"Base Products 2",
          productDescriptionEnglish:"Recorder Service for Billing Demo 2"
        },
        {
          id:3,
          name:"product3",
          sku:"SKU-00000104",
          description:"Demo3",
          category:"Base Products 3",
          productDescriptionEnglish:"Recorder Service for Billing Demo 3"
        },
        {
          id:4,
          name:"product4",
          sku:"SKU-00000105",
          description:"Demo4",
          category:"Base Products 4",
          productDescriptionEnglish:"Recorder Service for Billing Demo 4"
        },
        {
          id:5,
          name:"product5",
          sku:"SKU-00000105",
          description:"Demo4",
          category:"Base Products 4",
          productDescriptionEnglish:"Recorder Service for Billing Demo 5"
        }
    ]

      this.mockProducts2 = [{
        id:6,
        name:"product6",
        sku:"SKU-00000102",
        description:"Demo1",
        category:"Base Products 1",
        productDescriptionEnglish:"Recorder Service for Billing Demo 6"
      },
      {
        id:7,
        name:"product7",
        sku:"SKU-00000103",
        description:"Demo2",
        category:"Base Products 2",
        productDescriptionEnglish:"Recorder Service for Billing Demo 7"
      },
      {
        id:8,
        name:"product8",
        sku:"SKU-00000104",
        description:"Demo3",
        category:"Base Products 3",
        productDescriptionEnglish:"Recorder Service for Billing Demo 8"
      },
      {
        id:9,
        name:"product9",
        sku:"SKU-00000105",
        description:"Demo4",
        category:"Base Products 4",
        productDescriptionEnglish:"Recorder Service for Billing Demo 9"
      },
      {
        id:10,
        name:"product10",
        sku:"SKU-00000105",
        description:"Demo4",
        category:"Base Products 4",
        productDescriptionEnglish:"Recorder Service for Billing Demo 10"
      }
  ]
    
    this.list = true;
    this.mockProducts = this.mockProducts1;
  }

  ngOnInit() {
    
    this.countVar = 10;
    this.pageVar = 1;
    this.perPageVar = 5;
    this.loadingVar = false;
  }

  route(id){
    this.router.navigate(['proDetails', id]);
  }

  changeView() {
    if(!this.list){
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].style.width = "49%";
      }
    this.list = true;
    }else{
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].style.width = "100%";
      }
    this.list=false
    }
  }

  nextPage(){
    this.mockProducts = this.mockProducts2;
  }

  prevPage(){
    this.mockProducts = this.mockProducts1;
  }

  
    /*OnPageLiveDataReceived(liveData: StreamDataResponse) {}
    
    OnPageDataReceived(response: ComponentDataResponse) {}*/

}
