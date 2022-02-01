import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {
    
  transform(productCatalog : Product[], minprice: number , maxprice : number): Product[] {
    let filterproduct=productCatalog.filter((p)=>{return p.price>=minprice && p.price<=maxprice;});
    return filterproduct;
  }

}
