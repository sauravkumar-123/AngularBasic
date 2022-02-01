
export class Bookauthor{

    bookid : string;
    booktitle : string;
    bookisbnNo : string;
    totalpage : number;
    bookrating : string;
    bookprice : number;
    bookpublicationdate : string;

    constructor(bookid : string="", booktitle : string="" , bookisbnNo : string="", totalpage : number=0,  bookrating : string="",  bookprice : number=0, bookpublicationdate : string=""){
        this.bookid=bookid;
        this.booktitle=booktitle;
        this.bookisbnNo=bookisbnNo;
        this.totalpage=totalpage;
        this.bookrating=bookrating;
        this.bookprice=bookprice;
        this.bookpublicationdate=bookpublicationdate;
    }

}
