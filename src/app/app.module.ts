import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing'


import { AppComponent } from './app.component';
import { EcommModule } from './e-comm';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EcommModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
