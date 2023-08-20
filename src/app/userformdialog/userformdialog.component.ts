import { Component, OnInit } from '@angular/core';
import { FormBuilder, MaxLengthValidator, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-userformdialog',
  templateUrl: './userformdialog.component.html',
  styleUrls: ['./userformdialog.component.css']
})
export class UserformdialogComponent implements OnInit {
  age: any;
  icon="close"
  url: string = window.location.href;

  constructor(private fb:FormBuilder,
    public dialogRef: MatDialogRef<UserformdialogComponent>,
    private toastr:ToastrService,
    private service:ProductService) { }
    
    today = new Date( );
    maxDate = new Date(this.today.getFullYear() - 13, this.today.getMonth(), this.today.getDate());
    minDate = new Date(this.today.getFullYear() - 80, this.today.getMonth(), this.today.getDate());

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    mobileno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
    address: ['', Validators.required],
    age: ['',[ Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(13 ), Validators.max(80)]],
    dob: ['', Validators.required],
  })
  ngOnInit(): void {
  }
  calculateAge(selectedDate:any){
    let today = new Date();
    let calage = today.getFullYear() - selectedDate.getFullYear();
    this.age = calage;
    this.userForm.patchValue({
      age: this.age
    })
  }  
  onSubmit(formvalue:any){
    if(this.userForm.valid){
      // console.log(formvalue);
      this.service.addUser(formvalue).subscribe(data=>{
        console.log(data);
        this.dialogRef.close();
        this.toastr.success("User Details Submitted Successfully", "Success", { timeOut: 3000 }
        )
        if(this.url.includes("userlist")){
          window.location.reload();
        }
      });

    }
    else{
      this.userForm.errors
      this.userForm.markAllAsTouched();
      this.toastr.error("Please fill all the required fields properly", "Error", { timeOut: 1000 })
      
    }
  }
}
