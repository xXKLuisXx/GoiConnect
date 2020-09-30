import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from  'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse } from  '../Auth/auth-response';
import { RequestService } from '../services/request.service';
import { Publication } from './publication';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class PublicationService {

  authSubject  =  new  BehaviorSubject(false);
  authResponse : AuthResponse;
  private postValue: boolean;

  public publication: Publication = {
    title : "",
    description : "",
    multimedia : []
  }
  
  constructor(
    public httpClient : HttpClient,
    private request: RequestService
  ) { 
    this.postValue = true;
  }

  post(publication: Publication, authorization: string): Observable<AuthResponse> {
    return this.request.createRequest(publication, 'publication', this.postValue, authorization);
  }

  getPublications( authorization: string): Observable<AuthResponse> {
    return this.request.createRequestGet('publication', this.postValue, authorization);
  }

  

}
