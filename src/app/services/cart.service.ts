import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : Product[] = [];

  constructor( private http : HttpClient) { }

  getCartItems(){
    return this.items;
  }

  addToCart(item : Product){
    this.items.push(item);
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  removeItem(id : number){
    const index = this.items.findIndex(product => product.id === id);
    this.items.splice(index,1);
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
