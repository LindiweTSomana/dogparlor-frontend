import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private _url = "http://localhost:8080/role/getall";
  private url = "http://localhost:8080/role/delete";

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this._url);
  }
  
  addRole(data: Role): Observable<Role> {
    return this.http.post<Role>(this._url + 'create', data);
  }

  deleteRole(roleid: number) {
    const url = `${this.url}/${roleid}`;
    return this.http.delete(url);
  }

}
