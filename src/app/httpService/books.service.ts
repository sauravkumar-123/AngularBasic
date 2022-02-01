import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookapiResponse } from '../book-author/bookapi-response';
import { Bookauthor } from '../book-author/bookauthor';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient : HttpClient) {
    
  }

  getAllBookRecord() {
    this.httpClient.get<any>(environment.apiURL+'getallbooksrecord')
  }

  getBookRecordById(bookid : string) : Observable<BookapiResponse>{
    return this.httpClient.get<BookapiResponse>(environment.apiURL + 'getbookrecord/'+bookid);
  }

  // addBookRecord(bookauthor : Bookauthor){
  //   this.httpClient.post(environment.apiURL+'addbooks')
  // }

  // updateBookrecord(){

  // }

  // deleteBookRecord(bookid : string){

  // }
}
