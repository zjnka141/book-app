import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { ReadBooksComponent } from './read-books/read-books.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ReadBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
