import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : Product | null;

  constructor(private productService : ProductService, 
    private activateRoute : ActivatedRoute,
    private router : Router) { 

    this.product=new Product()
  }

  ngOnInit(): void {
    let productCode=""  //this.activateRoute.snapshot.paramMap.get('productCode')
    this.activateRoute.paramMap.subscribe((params)=>{
      productCode=params.get('productCode')
    })
    console.log(`productCode-->${productCode}`)
    if(!productCode)
    return null;
    this.product=this.productService.getProductById(productCode)
  }

  goback() : void{
    this.router.navigate(['/productCatalog'])
  }
}
