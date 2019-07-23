import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from "./book"
@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http:HttpClient) { }
  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>("http://localhost:8081/books");
  }
  save(book:Book):Observable<any>{
    return this.http.post("http://localhost:8081/books",book)
  }
  update(book:Book):Observable<any>{
    return this.http.patch("http://localhost:8081/books",book)
  }
}
