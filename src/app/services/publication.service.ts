import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from  'rxjs';
import { Publication } from '../Models/Classes/publication';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../services/request.service';
//import { Publication } from './publication';
import { RequestResponse } from '../Models/Classes/request-response';

@Injectable({
  providedIn: 'root'
})

export class PublicationService {

  authSubject  =  new  BehaviorSubject(false);
  private postValue: boolean;

  public publication: Publication = new Publication();
  
  constructor(
    public httpClient : HttpClient,
    private request: RequestService
  ) { 
    this.postValue = true;
  }

  post(publication: Publication, authorization?: string): Observable<RequestResponse> {
    return this.request.createRequest(publication, 'publication', this.postValue, authorization);
  }

  getPublications( authorization: string, page?: number): Observable<RequestResponse> {
    return this.request.createRequestGet('publication', this.postValue, authorization, page);
  }
  
}
