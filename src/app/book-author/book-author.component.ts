import { Component, OnInit } from '@angular/core';
import { BooksService } from '../httpService/books.service';
import { BookapiResponse } from './bookapi-response';
import { Bookauthor } from './bookauthor';

@Component({
  selector: 'app-book-author',
  templateUrl: './book-author.component.html',
  styleUrls: ['./book-author.component.css'],
  providers : [BooksService]
})
export class BookAuthorComponent {

  bookauthordata : Bookauthor;
  bookapiResponse : BookapiResponse;
  bookid : string=""
  errorMsg : string;
  errorStatus : boolean = false

  constructor(private bookauthorservice : BooksService) {  // dependency injection
    this.bookauthordata=new Bookauthor();
    this.bookapiResponse=new BookapiResponse();
    this.errorMsg='Please wait...'
  }

  getAkkBookRecord(): void{
      this.bookauthorservice.getAllBookRecord()
  }

  getBookRecordById() : void {
    this.bookauthorservice.getBookRecordById(this.bookid)
                          .subscribe((bookdata)=>{
                            this.errorStatus=true
                            this.bookapiResponse=bookdata;
                          },
                          (errResp)=>{
                            this.errorStatus=false
                            this.errorMsg="Geeting error"
                          }
                          );  
                          
                        //this.bookapiResponse.data.values.
   console.log(JSON.stringify(this.bookapiResponse))
  }
}
