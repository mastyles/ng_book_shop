// import { CartService } from './../../services/cart.service';
import { BookInterface } from './../../BookInterface';
import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: BookInterface[];

  constructor(private booksService: BooksService/*, private cartService: CartService*/) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit() {
  }

  addToCart(book: BookInterface) {
    // this.isInCart = true;
    // this.cartService.add(book);
  }

}
