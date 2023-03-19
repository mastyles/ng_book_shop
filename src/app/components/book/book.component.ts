import { BookInterface } from './../../BookInterface';
import { Component, /*EventEmitter,*/ Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: BookInterface = {} as BookInterface;
  // @Output() bookEmitter: EventEmitter<BookInterface> = new EventEmitter();
  isInCart: boolean = false;

  constructor(private cartService: CartService) {
  }

  addToCart() {
    // this.bookEmitter.emit(this.book);
    this.isInCart = true;
    this.cartService.add(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

}
