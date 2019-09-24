import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductAlertsComponent } from './component/product-alerts/product-alerts.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartComponent } from './component/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { ShippingComponent } from './component/shipping/shipping.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
