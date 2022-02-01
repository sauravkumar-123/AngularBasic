import { Component, Input, OnInit } from '@angular/core';
import { Orders } from './orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent{

  customerOrders : Orders[];
  //salesRepOrder : Orders[];

  @Input()
  salesRepId : string='';

  constructor() { 
    this.customerOrders=[
      new Orders('OR001' , new Date("10/08/2019"),'SP04'),
      new Orders('OR002' , new Date("09/15/2020"),'SP02'),
      new Orders('OR003' , new Date("11/20/2019"),'SP03'),
      new Orders('OR004' , new Date("05/22/2021"),'SP01'),
      new Orders('OR005' , new Date("10/24/2020"),'SP02'),
      new Orders('OR006' , new Date("07/22/2018"),'SP05'),
      new Orders('OR007' , new Date("10/09/2020"),'SP04'),
      new Orders('OR008' , new Date("12/17/2021"),'SP03'),
      new Orders('OR009' , new Date("12/12/2021"),'SP01'),
      new Orders('OR010' , new Date("07/10/2017"),'SP05'),
      new Orders('OR011' , new Date("10/21/2020"),'SP01'),
      new Orders('OR012' , new Date("11/19/2019"),'SP05'),
      new Orders('OR013' , new Date("07/13/2018"),'SP02'),
      new Orders('OR014' , new Date("11/05/2013"),'SP04'),
      new Orders('OR015' , new Date("12/04/2021"),'SP03'),
      new Orders('OR016' , new Date("09/08/2016"),'SP01'),
      new Orders('OR017' , new Date("11/08/2018"),'SP04'),
      new Orders('OR018' , new Date("07/05/2016"),'SP03'),
      new Orders('OR019' , new Date("05/19/2016"),'SP02'),
      new Orders('OR020' , new Date("06/15/2020"),'SP01'),
      new Orders('OR021' , new Date("11/08/2019"),'SP03'),
      new Orders('OR022' , new Date("10/25/2020"),'SP04'),
      new Orders('OR023' , new Date("02/01/2021"),'SP02')
    ]
  }
}
