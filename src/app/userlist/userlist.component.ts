import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: any;

  constructor(private service: ProductService,private toastr:ToastrService) {}

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }
  deleteUser(user: any) {
    this.service.deleteUser(user).subscribe(data => {
      this.ngOnInit();
    })
  }

}
