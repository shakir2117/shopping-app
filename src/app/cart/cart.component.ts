import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartProduct:any
  totalPrice:number=0
  constructor(private productservice:ProductService) {
    
  }

  ngOnInit(){
    this.cartProduct
    this.productservice.getCart().subscribe(data=>{
      this.cartProduct=data
      this.totalPrice=0
      if(this.cartProduct.length>0){
        for (let i = 0; i < this.cartProduct.length; i++) {
          this.totalPrice+=this.cartProduct[i].Price
        }
      }
    })
  }

  removeFromCart(product:any){
    this.productservice.removeFromCart(product).subscribe(data=>{
      this.ngOnInit()
    })
  }
  

}
