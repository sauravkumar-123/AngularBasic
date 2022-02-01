export class Book {

    bookid : string;
    booktitle :string;
    ISBNno : string;
    bookprice : Number;
    noOfpages : Number;
    printdate : Date;
    authorname : string;
    bookimagepath : string;
    authorimagepath : string;

    constructor(bookid :string, booktitle :string, ISBNno : string, bookprice : Number, noOfpages : Number, printdate : Date, authorname : string, bookimagepath : string, authorimagepath : string){
        this.bookid=bookid;
        this.booktitle=booktitle;
        this.ISBNno=ISBNno;
        this.bookprice=bookprice;
        this.noOfpages=noOfpages;
        this.printdate=printdate;
        this.authorname=authorname;
        this.bookimagepath=bookimagepath;
        this.authorimagepath=authorimagepath;
    }

}
