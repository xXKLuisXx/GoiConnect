import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Join } from '../Models/Classes/join';
import { RequestResponse } from '../Models/Classes/request-response';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class JoinService {

  private postValue: boolean;
  //private join: Publication = new Publication();

  constructor(public httpClient : HttpClient, private request: RequestService) {
    this.postValue = true;
  }

  public join(join: Join, authorization?: string): Observable<RequestResponse> {
    return this.request.createRequest(join, 'assist', this.postValue, authorization);
  }

  public existJoin(authorization: string, id_detail:number): Observable<RequestResponse> {
    return this.request.createRequestGet('join', this.postValue, authorization, id_detail, 'id_detail');
  }

  public isJoined(authorization: string, id_detail:number): Observable<RequestResponse> {
    return this.request.createRequestGet('joined', this.postValue, authorization, id_detail, 'id_detail');
  }

  public updateJoin(authorization: string, id:number): Observable<RequestResponse> {
    return this.request.createRequestUpdate('id', 'assist', this.postValue, authorization, id);
  }

  
}

