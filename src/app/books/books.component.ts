import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService) { }
  books: Book[];
  bookAdded: string;
  ngOnInit() {
    this.loadBooks();
  }
  
  addBook() {
    let book: Book = {
      id: Math.random() * 1000,
      name: this.bookAdded,
      read: false
    }
    this.bookService.save(book).subscribe(data => {
      this.loadBooks();
      this.bookAdded = "";
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  moveToRead(book) {
    book.read = true;
    this.bookService.update(book).subscribe(data => {
      this.loadBooks();
    })
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(data => {
      let _books = [];
      data.forEach(function (book) {
        if (!book.read) {
          _books.push(book);
        }
      })
      this.books = _books;
    }, error => {
      console.log(error);
    })
  }

}
