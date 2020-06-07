import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders();

  constructor( private _http: HttpClient ) { }

  getHeader(){
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    return this.headers;
  }

  getUsers(){
    return this._http.get(`https://reqres.in/api/users?page=2`, {headers:this.getHeader(), observe:'response'});
  }
}
