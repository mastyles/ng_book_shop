import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'The Story of Rogger',
        author: 'Jimmy Hawk',
        image: '/assets/images/book_even.jpg',
        amount: 500
      },
      {
        name: 'Psycho Killer',
        author: 'Paul David',
        image: '/assets/images/book_odd.jpg',
        amount: 800
      },
      {
        name: 'Unified Nation',
        author: 'Andrew Steven',
        image: '/assets/images/book_even.jpg',
        amount: 1200
      },
      {
        name: 'Once Upon A Time in L.A.',
        author: 'Robert Heard',
        image: '/assets/images/book_odd.jpg',
        amount: 450
      },
    ]
  }
}
