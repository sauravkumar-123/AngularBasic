import { Component, OnInit } from '@angular/core';
import { SalesRep } from './sales-rep';

@Component({
  selector: 'app-sales-rep',
  templateUrl: './sales-rep.component.html',
  styleUrls: ['./sales-rep.component.css']
})
export class SalesRepComponent {

  SalesReps : SalesRep[];
  salesRepId : string='';
  
  constructor() { 
    this.SalesReps=[
        new SalesRep('SP01','Saurav Kumar', 'Bangalore'),
        new SalesRep('SP02','Rakesh Verma', 'Delhi'),
        new SalesRep('SP03','Mohit Singh', 'Noida'),
        new SalesRep('SP04','Shirsti Shah', 'Hydrabad'),
        new SalesRep('SP05','Ranjan Singh', 'Cheenai')
    ];
  }

  onSalesRepIdSelected(SalesRep : SalesRep) : void{
    this.salesRepId=SalesRep.salesRepId
    console.log("salesrepid"+this.salesRepId)
  }
}
