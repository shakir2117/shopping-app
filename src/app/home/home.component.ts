import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any;
  constructor(private productService: ProductService,private toastr:ToastrService ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }


  addToCart(product: any) {
    this.productService.addToCart(product)
  }
}
