import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component1.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  productCatalog:Product[];
  selectedCategory:string='Mobile';
  minprice : number = 1.0;
  maxprice : number = 100.0;

  Categories:string[]=["Mobile","Home Applicances","Electronics","Stationary","Fashoin"];

  // constructor() { 
  //   this.productCatalog=[
  //     new Product('P01','MI TV',32500.85,'Home Applicances','/assets/productImages/prod1.jpg'),
  //     new Product('P02','HP LAPTOP', 65852.95,'Electronics','/assets/productImages/prod2.jpg'),
  //     new Product('P03','Jackets', 1855.00,'Fashoin','/assets/productImages/prod3.jpg'),
  //     new Product('P04','NoteBook', 250.85,'Stationary','/assets/productImages/prod4.jpg'),
  //     new Product('P05','Boat Headphone',1550.25,'Electronics','/assets/productImages/prod5.jpg'),
  //     new Product('P06','iPhone 13Pro', 120000.85,'Mobile','/assets/productImages/prod6.jpg')
  //   ]
  // }

  constructor(private productService : ProductService){
    this.productCatalog=[]
    this.productService.addProduct(new Product('P07','MI 11PRO', 11500.85,'Mobile','/assets/productImages/prod6.jpg'))
  }

  ngOnInit(): void{
    this.productCatalog=this.productService.getProducts();
  }
}
