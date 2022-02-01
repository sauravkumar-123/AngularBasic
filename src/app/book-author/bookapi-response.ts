import { Bookauthor } from "./bookauthor";

export class BookapiResponse {
    status : boolean;
    message : string;
    data : Bookauthor[];

    constructor(status : boolean=false, message : string='', data : Bookauthor[]=[]){
        this.status=status;
        this.message=message;
        this.data=data;
    }

}
