import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from  'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse } from  '../Auth/auth-response';
import { RequestService } from '../services/request.service';
import { Publication } from './publication';

@Injectable({
  providedIn: 'root'
})

export class PublicationService {

  authSubject  =  new  BehaviorSubject(false);
  authResponse : AuthResponse;
  postValue = true;
  
  constructor(
    public httpClient : HttpClient,
    private request: RequestService
  ) { }

  post(publication: Publication, authorization: string): Observable<AuthResponse> {
    return this.request.createRequest(publication, 'publication', this.postValue, authorization);
  }

  /*getPublications(): Observable<AuthResponse> {
    return this.request.createRequestGet('publication');
  }*/

  

}
