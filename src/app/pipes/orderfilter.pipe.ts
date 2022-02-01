import { Pipe, PipeTransform } from '@angular/core';
import { Orders } from '../parent-child/orders/orders';

@Pipe({
  name: 'orderfilter'
})
export class OrderfilterPipe implements PipeTransform {

  transform( customerOrders : Orders[], salesRepId : string): Orders[]{
    if(!salesRepId){
      return customerOrders
    }

    return customerOrders.filter(customerOrder=>customerOrder.salesRepId==salesRepId)
  }

}
