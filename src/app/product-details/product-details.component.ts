import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product: Product | undefined;
  productId : number | undefined;

  constructor(private route : ActivatedRoute, private cartService : CartService) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = products.find(prod => prod.id === this.productId);
  }

  addToCart(product : Product){
    this.cartService.addToCart(product);
    window.alert('Item added to Cart!')
  }

}
