import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ReadBooksComponent } from './read-books/read-books.component';

const routes: Routes = [
  {path:"books",component:BooksComponent},
  {path:"read-books",component:ReadBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
