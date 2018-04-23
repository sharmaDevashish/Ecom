import { Component, OnInit,Injector } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, NavigationExtras } from "@angular/router";
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common'; 
import { element } from 'protractor';
import { PaginationComponent } from '../pagination/pagination.component';
import { BaseServices } from "../../services/base-services";
import { ProductCatlog } from '../../models/productsCatlog';
import { Products } from '../../models/products';
import { ProductBaseService } from '../../base-classes/product-base.service';
//import { PageBase } from '@yokogawa-iiot/page-common/base-classes';
//import { EnvironmentProviderBase, ServiceLocatorBase, LogProviderBase, CacheProviderBase } from '@yokogawa-iiot/core/base-classes';


//import { StreamDataResponse, ComponentDataResponse } from '@yokogawa-iiot/core/models';

@Component({
  selector: 'productCatlog-page',
  templateUrl: './product-catlog.component.html',
  styleUrls: ['./product-catlog.component.css']
})


export class ProductCatlogComponent /*extends PageBase*/ implements OnInit {

  private elements = document.getElementsByClassName("column") as HTMLCollectionOf<HTMLElement>;
  private list:boolean = false;
  private grid:boolean = true;
  private serviceResponse:ProductCatlog;
  private mockProducts = [];
  private mockProducts1 = [];
  private mockProducts2 = [];
  private countVar:number = 0;
  private pageVar:number = 0;
  private perPageVar:number = 0;
  private loadingVar:boolean = false;  
  /*constructor(
        private router: Router,injector: Injector,
        serviceSelector: ServiceLocatorBase) {
        super(injector, serviceSelector)
    }*/

    constructor(public router:Router, public paginationComponent:PaginationComponent, private pbs:ProductBaseService){}

  ngOnInit() {

    this.pbs.getProductCatalog().then(
      (val) => {this.mockProducts = val.Products},
      (err) => console.log(err)
    );
    
    this.countVar = 10;
    this.pageVar = 1;
    this.perPageVar = 5;
    this.loadingVar = false;
  }

  route(id){
    this.router.navigate(['proDetails', id]);
  }

  changeView() {
    if(this.grid == false && this.list == true){
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].style.width = "48%";
      }
    this.list = false;
    this.grid = true;
    }else{
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].style.width = "100%";
      }
    this.list = true;
    this.grid = false;
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
