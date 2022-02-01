import { Component, OnInit } from '@angular/core';
import { TouristService } from '../httpService/tourist-service';
import { Tourist } from './tourist';

@Component({
  selector: 'app-tourist-spots',
  templateUrl: './tourist-spots.component.html',
  styleUrls: ['./tourist-spots.component.css'],
  providers : [TouristService]
})
export class TouristSpotsComponent {

  touristSpots : Tourist
  state : string 

  Msg : string="Loading.......";
  Status : boolean = false
  constructor(private turistSpotservice : TouristService) { 
    this.touristSpots=new Tourist()

  }
   getSpotRecordByState() : void {
    this.turistSpotservice.getTouristspotRecordByState(this.state)
                          .subscribe(
                            (data)=>{
                              this.touristSpots=data;
                              this.Status=true
                              this.Msg="Success"
                            },
                            (errResp)=>{
                              this.Status=false
                              this.Msg="Geeting error"
                            }
                            );  
   }
}
