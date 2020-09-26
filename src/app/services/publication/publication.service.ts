import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from  'rxjs';

import { Publication } from './publication';
import { AuthResponse } from '../../Auth/auth-response';


@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  AUTH_SERVER_ADDRESS:  string  =  'http://192.168.0.15:8000';
  authSubject  =  new  BehaviorSubject(false);
  authResponse : AuthResponse;
  constructor(
    public httpClient : HttpClient
    ) { }

  post(publication: Publication, auth: any): Observable<AuthResponse> {
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                     .set("Authorization", auth);
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/api/publications`, publication, {headers});
  }

  

}