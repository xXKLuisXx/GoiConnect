import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})


export class RequestService {
	private AUTH_SERVER_ADDRESS : string;
	private HEADERS : Array<Array<string>>;
	private END_POINTS : Array<Array<string>>;
	private PARAMETERS : Array<string>;

	constructor(
		public httpClient : HttpClient
	) { 
		this.AUTH_SERVER_ADDRESS = 'http://192.168.0.8:8000/api/';
		this.HEADERS = [['Content-Type', 'application/json'], ['Authorization', '']];
		this.END_POINTS = [['login', '0'], ['register', '0'], ['publications', '1'], ['assist', '1'], ['join', '1'], ['joined', '1'], ['lodgings', '1']];
		this.PARAMETERS = ['?page=', '?id_detail=', '/'];
	}

	private selectEnpoint(endPoint:string){
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
			default:
				break;
		}
		return null
	}

	private createHeaders(endPoint: string) : HttpHeaders {
		let headers = new HttpHeaders();
		let endPointArray = this.selectEnpoint(endPoint);

		this.HEADERS.forEach(Header => {
			if(Header[0] == "Authorization"){
				if(endPointArray[1] == '1'){
					headers = headers.set(Header[0], Header[1]);
				}
			}else{
				headers = headers.set(Header[0], Header[1]);
			}
		});

		return headers;
	}

	public createRequestPost(endPoint: string, object?: any) : Observable<any> {
		let headers = this.createHeaders(endPoint);
		return this.httpClient.post<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), object, { headers } );
	}

	public createRequestGet(endPoint: string, object?: any) : Observable<any> {
		let headers = this.createHeaders(endPoint);
		return this.httpClient.get<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), { headers } );
	}

	public createRequestUpdate(endPoint: string, object?:any) : Observable<any> {
		let headers = this.createHeaders(endPoint);
		return this.httpClient.put<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), object, { headers } );
	}
}
