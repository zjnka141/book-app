import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-read-books',
  templateUrl: './read-books.component.html',
  styleUrls: ['./read-books.component.css']
})
export class ReadBooksComponent implements OnInit {

  constructor(private bookService:BookService) { }
  books:Book[];
  ngOnInit() {
    this.loadBooks();
  }
  moveToUnread(book){
    book.read=false;
    this.bookService.update(book).subscribe(data=>{
      this.loadBooks();
    })
  }
  loadBooks(){
    this.bookService.getBooks().subscribe(data=>{
    let _books=[];
    data.forEach(function(book){
      if(book.read){
        _books.push(book);
      }
    })
    this.books=_books;
  })}
}
