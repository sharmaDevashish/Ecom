import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductCatlogComponent } from './e-comm/components/productCatlog/product-catlog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'proCat',
    pathMatch: 'full'
  },
  {
    path: 'proCat',
    component: ProductCatlogComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}