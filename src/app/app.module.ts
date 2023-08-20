import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { ProductService } from './product.service';
import { CartComponent } from './cart/cart.component';
import { HttperrInterceptor } from './httperr.interceptor';
import { UserformdialogComponent } from './userformdialog/userformdialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    UserformdialogComponent,
    UserlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedmoduleModule,
    HttpClientModule,
    MaterialModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    ReactiveFormsModule

    
  ],
  providers: [
    ProductService,
    { provide: HTTP_INTERCEPTORS, useClass: HttperrInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
