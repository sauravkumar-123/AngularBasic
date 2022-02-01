import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tourist } from "../tourist-spots/tourist";

@Injectable({
    providedIn: 'root'
  })

export class TouristService {

    constructor(private httpClient : HttpClient) {

    }

    getTouristspotRecordByState(state : string) : Observable<Tourist>{
        return this.httpClient.get<Tourist>('http://localhost:8080/TourAdvisor/TouristPlaces/States'+state);
      }
  
}
