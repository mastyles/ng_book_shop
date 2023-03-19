import { BookInterface } from './../../BookInterface';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService) {}

  getCart(): BookInterface[] {
    return this.cartService.get();
  }

}
