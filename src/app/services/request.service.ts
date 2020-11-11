import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessUserData } from '../Models/Classes/access-user-data';
import { Utils } from '../Models/Classes/utils';

@Injectable({
	providedIn: 'root'
})

export class RequestService {
	private AUTH_SERVER_ADDRESS = 'http://192.168.100.100:8000/api/';
	private HEADERS = [['Content-Type', 'application/json'], ['Authorization', '']];
	private END_POINTS = [['login', '0'], ['register', '0'], ['publications', '1'], ['assist', '1'], ['join', '1'], ['joined', '1'], ['lodgings', '1'], ['friends', '1'], ['add', '1'], ['userFollow', '1'], ['addFriendSuper', '1'], ['blockFriend', '1'], ['blockNotFriend', '1'], ['listrequest', '1'], ['acceptFriend', '1'], ['allfriends', '1']];
	constructor(
		private httpClient: HttpClient,
		private utils: Utils
	) { }

	private selectEnpoint(endPoint: string): Array<string> {
		switch (endPoint) {
			case 'login':
				return this.END_POINTS[0];
			case 'register':
				return this.END_POINTS[1];
			case 'publication':
				return this.END_POINTS[2];
			case 'assist':
				return this.END_POINTS[3];
			case 'join':
				return this.END_POINTS[4];
			case 'joined':
				return this.END_POINTS[5];
			case 'lodgings':
				return this.END_POINTS[6];
			case 'friends':
				return this.END_POINTS[7];
			case 'add':
				return this.END_POINTS[8];
			case 'userFollow':
				return this.END_POINTS[9];
			case 'addFriendSuper':
				return this.END_POINTS[10];
			case 'blockFriend':
				return this.END_POINTS[11];
			case 'blockNotFriend':
				return this.END_POINTS[12];
			case 'listrequest':
				return this.END_POINTS[13];
			case 'acceptFriend':
				return this.END_POINTS[14];
			case 'allfriends':
				return this.END_POINTS[15];
			default:
				break;
		}
		return null
	}

	private createHeaders(endPoint: string): Promise<HttpHeaders> {
		return new Promise(async (resolve, reject) => {
			let headers = new HttpHeaders();
			let endPointArray = this.selectEnpoint(endPoint);
			headers = headers.set(this.HEADERS[0][0], this.HEADERS[0][1]);

			if(endPointArray[1] == '1'){
				await this.utils.getAccessData().then((AccessUserData: AccessUserData) => {
					this.HEADERS[1][1] = AccessUserData.getAuthorization();
					headers = headers.set(this.HEADERS[1][0], this.HEADERS[1][1]);
				}).catch((error) => {
					reject(error);
				});
			}
			resolve(headers);
		});
	}

	private parseObjectToQueryParams(object: any): string {
		let queryParams;
		Object.keys(object).forEach((key, index) => {
			if (index == 0) {
				queryParams = "?"
			} else {
				queryParams = "&"
			}
			queryParams += key + "=" + object[key];
		});

		return queryParams;
	}

	public createRequestPost(endPoint: string, object?: any): Promise<Observable<any>> {
		return new Promise((resolve, reject) => {
			this.createHeaders(endPoint).then((headers) => {
				resolve(this.httpClient.post<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint)[0], object, { headers }));
			}).catch((error) => {
				reject(error);
			})
		});
	}

	public createRequestGet(endPoint: string, object?: any): Promise<Observable<any>> {
		return new Promise((resolve, reject) => {
			this.createHeaders(endPoint).then((headers) => {
				// tslint:disable-next-line: max-line-length
				resolve(this.httpClient.get<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint)[0] + this.parseObjectToQueryParams(object), { headers }));
			}).catch((error) => {
				reject(error);
			})
		});
	}

	public createRequestUpdate(endPoint: string, object?: any): Promise<Observable<any>> {
		return new Promise((resolve, reject) => {
			this.createHeaders(endPoint).then((headers) => {
				resolve(this.httpClient.put<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint)[0], object, { headers }));
			}).catch((error) => {
				reject(error);
			})
		});
	}
}
