import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatlogComponent } from './components/productCatlog/productCatlog.component';
import { ProductDetailsComponent } from './components/productDetails/productDetails.component';
import { PaginationComponent } from './components/pagination/pagination.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'proCatlog',
    pathMatch: 'full'
  },
  {
    path: 'proCatlog',
    component: ProductCatlogComponent
  },
  {
    path: 'proDetails/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class EcommRoutingModule {
}