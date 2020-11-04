import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from  'rxjs';
import { Publication } from '../Models/Classes/publication';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../services/request.service';
//import { Publication } from './publication';
import { RequestResponse } from '../Models/Classes/request-response';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PublicationService {

  authSubject  =  new  BehaviorSubject(false);
  private tokenRequired: boolean;
  public publication: Publication = new Publication();

  
  private updatePublication = new Subject<string>();
  updatePublication$ = this.updatePublication.asObservable();
  
  constructor(
    public httpClient : HttpClient,
    private request: RequestService
  ) { 
    this.tokenRequired = true;
  }

  updatePublications() {
    this.updatePublication.next();
  }

  post(publication: Publication, authorization?: string): Observable<RequestResponse> {
    return this.request.createRequest(publication, 'publication', authorization);
  }

  getPublications( authorization: string, endPoint: string, page?: number): Observable<RequestResponse> {
    return this.request.createRequestGet(endPoint, authorization, page, 'page');
  }

  
}
