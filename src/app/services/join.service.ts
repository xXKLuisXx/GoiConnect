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

  private tokenRequired: boolean;
  //private join: Publication = new Publication();

  constructor(public httpClient : HttpClient, private request: RequestService) {
    this.tokenRequired = true;
  }

  public join(join: Join, authorization?: string): Observable<RequestResponse> {
    return this.request.createRequest(join, 'assist', authorization);
  }

  public existJoin(authorization: string, id_detail:number): Observable<RequestResponse> {
    return this.request.createRequestGet('join', authorization, id_detail, 'id_detail');
  }

  public isJoined(authorization: string, id_detail:number): Observable<RequestResponse> {
    return this.request.createRequestGet('joined', authorization, id_detail, 'id_detail');
  }

  public updateJoin(authorization: string, id:number): Observable<RequestResponse> {
    return this.request.createRequestUpdate('assist', authorization, id);
  }

}

