import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) { }

  intercept(req:any, next:any):any{

    const token:any= this.token.getToken();

    const tokenHeader = req.clone({
      setHeaders: {
        Authorization: 'Bearer ${token}'
      }
    });
    return next.handle(tokenHeader);
  }
}
