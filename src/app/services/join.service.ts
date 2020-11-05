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
	constructor(
		public httpClient: HttpClient,
		private request: RequestService
	) { }

	public join(join: Join): Promise<Observable<RequestResponse>> {
		return new Promise((resolve, reject) => {
			this.request.createRequestPost('assist', join).then((client) => {
				resolve(client);
			}).catch((error) => {
				reject(error);
			});
		});
	}

	public existJoin(id_detail: number): Promise<Observable<RequestResponse>> {
		return new Promise((resolve, reject) => {
			this.request.createRequestGet('join', { "id_detail":id_detail } ).then((client) => {
				resolve(client);
			}).catch((error) => {
				reject(error);
			});
		});
	}

	public isJoined(id_detail: number): Promise<Observable<RequestResponse>> {
		return new Promise((resolve, reject) => {
			this.request.createRequestGet('joined', { "id_detail":id_detail } ).then((client) => {
				resolve(client);
			}).catch((error) => {
				reject(error);
			});
		});
	}

	public updateJoin(id: number): Promise<Observable<RequestResponse>> {
		return new Promise((resolve, reject) => {
			this.request.createRequestUpdate('assist', { "id":id, "comida":2} ).then((client) => {
				resolve(client);
			}).catch((error) => {
				reject(error);
			});
		});
	}

}

