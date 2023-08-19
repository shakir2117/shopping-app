import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getProducts() {
    return this.http.get("http://localhost:3000/products");
  }
  addToCart(product: any) {
    return this.http.post("http://localhost:3000/cart", product).subscribe(data => {
      if (data) {
        this.toastr.success("Product Added to Cart Successfully", "Success", { timeOut: 3000 })
      }
    },
      err => {
        if (err.error.includes("duplicate")) {
          this.toastr.error("Product already added to the cart", "Ohh", { timeOut: 2000 })
        }
      })
  }
  getCart(){
    return this.http.get("http://localhost:3000/cart")
  }
  removeFromCart(product:any){
    return this.http.delete("http://localhost:3000/cart/"+product.id)
  }
}
