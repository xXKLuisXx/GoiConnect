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

	constructor(public httpClient: HttpClient, private request: RequestService) {
		this.tokenRequired = true;
	}

	public join(join: Join): Observable<RequestResponse> {
		return this.request.createRequestPost('assist', join);
	}

	public existJoin(id_detail: number): Observable<RequestResponse> {
		return this.request.createRequestGet('join', id_detail);
	}

	public isJoined(id_detail: number): Observable<RequestResponse> {
		return this.request.createRequestGet('joined', id_detail);
	}

	public updateJoin(id: number): Observable<RequestResponse> {
		return this.request.createRequestUpdate('assist', id);
	}

}

