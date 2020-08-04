import { Injectable } from '@angular/core';
import { BehaviorSubject } from  'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from  './user';
import { AuthResponse } from  './auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER_ADDRESS:  string  =  'http://192.168.0.5:8000';
  authSubject  =  new  BehaviorSubject(false);
  authResponse : AuthResponse;
  constructor(
    public httpClient : HttpClient
    ) { }

  register(user: User) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    //let json = this.UserData;
    console.log("entra");
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/api/register`, user, {headers});
  }
}
