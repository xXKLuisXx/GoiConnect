import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from  'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from  './user';
import { AuthResponse } from  './auth-response';
import { RequestService } from '../services/request.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubject  =  new  BehaviorSubject(false);
  authResponse : AuthResponse;
  constructor(
    public httpClient : HttpClient,
    private request: RequestService
  ) { }

  register(user: User): Observable<AuthResponse> {
    return this.request.createRequest(user, 'register');
  }

  login(user: User): Observable<AuthResponse> {
    return this.request.createRequest(user, 'login');
    //const headers = new HttpHeaders().set("Content-Type", "application/json");
    //return this.httpClient.post<AuthResponse>(this.AUTH_SERVER_ADDRESS + '/api/login', user, {headers});
  }

}
