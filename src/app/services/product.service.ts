import { findLast } from '@angular/compiler/src/directive_resolver';
import { Injectable } from '@angular/core';
import { Product } from '../product/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productCatalog : Product[];

 constructor() { 
    this.productCatalog=[
      new Product('P01','MI TV',32500.85,'Home Applicances','/assets/productImages/prod1.jpg'),
      new Product('P02','HP LAPTOP', 65852.95,'Electronics','/assets/productImages/prod2.jpg'),
      new Product('P03','Jackets', 1855.00,'Fashoin','/assets/productImages/prod3.jpg'),
      new Product('P04','NoteBook', 250.85,'Stationary','/assets/productImages/prod4.jpg'),
      new Product('P05','Boat Headphone',1550.25,'Electronics','/assets/productImages/prod5.jpg'),
      new Product('P06','iPhone 13Pro', 120000.85,'Mobile','/assets/productImages/prod6.jpg')
    ]
  }

  addProduct(product : Product) : number {
    return this.productCatalog.push(product);
  }

  getProducts() : Product[] {
    return this.productCatalog;
  }

  getProductById(productCode : string) : Product {
      let result=this.productCatalog.find((product)=>{return product.productCode==productCode})
      console.log("productCode-->"+productCode)
      console.log("result--->"+result)
      if(result==undefined)
      return null
      else
      return result
  }
}
