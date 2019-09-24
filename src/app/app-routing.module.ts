import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './component/product-list/product-list.component';
import {ProductDetailComponent} from './component/product-detail/product-detail.component';
import {CartComponent} from './component/cart/cart.component';
import {ShippingComponent} from './component/shipping/shipping.component';



const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'product/:productId', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'shipping', component: ShippingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
