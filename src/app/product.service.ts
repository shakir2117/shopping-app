import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.apiurl;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getProducts() {
    return this.http.get(this.url+"/products");
  }
  addToCart(product: any) {
    return this.http.post(this.url+"/cart", product).subscribe(data => {
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
    return this.http.get(this.url+"/cart")
  }
  removeFromCart(product:any){
    return this.http.delete(this.url+"/cart/"+product.id)
  }
  addUser(user:any){
    return this.http.post(this.url+"/user",user)
  }
  getUsers(){
    return this.http.get(this.url+"/user")
  }
  deleteUser(user:any){
    return this.http.delete(this.url+"/user/"+user.id)
  }
}
