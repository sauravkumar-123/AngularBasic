import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent{

  bookDetails: Book[];

  constructor(){
    this.bookDetails=[
      new Book('bk01','Datastructure & Algorithm','ISB0025741025', 556.85, 856, new Date('November 25,2019'),'Shyam Kishore','/assets/images/dsalgo.jpg','/assets/images/saurav.jpg'),
      new Book('bk02','Java Programming','ISB2574874100', 350.85, 1020, new Date('March 13,2009'),'Ram Kumar','/assets/images/dsalgo.jpg','/assets/images/saurav.jpg'),
      new Book('bk03','C++','ISB9852103562', 855.95, 588, new Date('January 15,2015'),'Shivarkar Rao','/assets/images/dsalgo.jpg','/assets/images/saurav.jpg'),
      new Book('bk04','Java Script','ISB2014857412', 259.95, 356, new Date('June 22,2013'),'Mr. Baluja','/assets/images/dsalgo.jpg','/assets/images/saurav.jpg'),
      new Book('bk05','Angular12','ISB9652014785', 355.25, 450, new Date('July 25,2012'),'M. Kapoor','/assets/images/dsalgo.jpg','/assets/images/saurav.jpg')
    ]
  }
}
