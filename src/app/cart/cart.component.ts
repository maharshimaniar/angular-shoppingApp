import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../services/cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(id: number) {
    this.cartService.removeItem(id);
  }

  onSubmit(): void {
    // Process checkout data here
    this.cartItems = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
