import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient) { }

  generateToken(request: any) {
    return this.http.post<any>("http://localhost:8080/auth/authenticate", request, {responseType: 'text' as 'json'});
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }

  haveUserAccess() {
    let token = localStorage.getItem('token') || '';

    if (token === null || token === ''){
      return false;
    }

    let extractedToken = token.split('.')[1];
    let atobdata = atob(extractedToken);
    let finalData = JSON.parse(atobdata);
    
    if (finalData.customer) {
      let role = finalData.customer.user.role;
      if (role === 'USER') {
        return true;
      }
      return false;
    } else if (finalData.staff || finalData.admin) {
      return false;
    }
    return false;
  }

  haveStaffAccess() {
    let token = localStorage.getItem('token') || '';

    if (token === null || token === ''){
      return false;
    }

    let extractedToken = token.split('.')[1];
    let atobdata = atob(extractedToken);
    let finalData = JSON.parse(atobdata);

    if (finalData.staff) {
      let role = finalData.staff.user.role;
      if (role === 'STAFF') {
        return true;
      }
      return false;
    } else if (finalData.customer || finalData.admin) {
      return false;
    }
    return false;
  }

  haveAdminAccess() {
    let token = localStorage.getItem('token') || '';

    if (token === null || token === ''){
      return false;
    }

    let extractedToken = token.split('.')[1];
    let atobdata = atob(extractedToken);
    let finalData = JSON.parse(atobdata);

    if (finalData.admin) {
      let role = finalData.admin.user.role;
      if (role === 'ADMIN') {
        return true;
      }
      return false;
    } else if (finalData.customer || finalData.staff) {
      return false;
    }
    return false;
  }
}
