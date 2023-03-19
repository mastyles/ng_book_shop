import { Injectable } from '@angular/core';
import { BookInterface } from '../BookInterface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<BookInterface> = [];

  constructor() { }

  add(book: BookInterface) {
    this.cart.push(book);
  }

  get(): BookInterface[] {
    return this.cart;
  }

  remove(book: BookInterface) {
    this.cart = this.cart.filter( (b) => b !== book );
  }
}
