import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtClientService } from '../../services/security-client/jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private jwtClient: JwtClientService, private inject: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.inject.get(JwtClientService);
    let jwtToken = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + authService.getToken(),
      }
    });
    return next.handle(jwtToken);
  }

}
