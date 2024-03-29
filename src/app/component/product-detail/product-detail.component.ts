import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {products} from '../../model/product';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart !!!');
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+ params.get('productId')];
    });
  }

}
