import { Component } from '@angular/core';
import { bookList } from '../bookmodel';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  booklist:any = bookList;

}
