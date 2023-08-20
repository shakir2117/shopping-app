import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttperrInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY = 'this is my api key for my shopping app';
    return next.handle(request.clone({setHeaders: {API_KEY}})).pipe(
      catchError( err => {
        let errormessage:string
        if (err.status === 0) {
          errormessage =  `An error occurred: ${err.message}`
        } else if((!(err instanceof HttpErrorResponse))) {
          errormessage =  err.rejection;
        }
        else{
          errormessage =  `Server Error code ${err.status}`
        }
        this.toastr.error(errormessage, 'Error', { timeOut: 3000})
        return throwError(() => new Error('Something bad happened; please try again later.'));
      })
    );
  }
}
