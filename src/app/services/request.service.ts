import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class RequestService {
	private AUTH_SERVER_ADDRESS : string;
	private HEADERS : Array<Array<string>>;
	private END_POINTS : Array<string>;
	private headers : HttpHeaders;

	constructor(
		public httpClient : HttpClient
	) { 
		this.AUTH_SERVER_ADDRESS = 'http://192.168.0.15:8000/api/';
		this.HEADERS = [['Content-Type', 'application/json'], ['Authorization', ''], ['responseType','text']];
		this.END_POINTS = ['login', 'register', 'publications'];
		this.headers = new HttpHeaders();
	}

	private selectEnpoint(endPoint:string){
		switch (endPoint) {
			case 'login':
				return this.END_POINTS[0];
			case 'register':
				return this.END_POINTS[1];
			case 'publication':
				return this.END_POINTS[2];
			default:
				break;
		}
		return 
	}

	private createHeaders( tokenRequired: boolean, token?: string ) : HttpHeaders {
		if( !tokenRequired ) this.headers = this.headers.set(this.HEADERS[0][0], this.HEADERS[0][1]);
		
		else{
			this.HEADERS.forEach(Header => {
				if ( Header[0] === "Authorization"){
					this.headers = this.headers.set(Header[0], token);
				}
				else this.headers = this.headers.set(Header[0], Header[1]);	

			});
		}
		return this.headers;
	}

	public createRequest(object: any, endPoint: string, post: boolean, token?: string) : any {
		const headers = this.createHeaders( post, token);
		return this.httpClient.post<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), object,  { headers } );
	}

	public createRequestGet(endPoint: string, post: boolean, token?: string) : any {
		const headers = this.createHeaders( post, token);
		return this.httpClient.get<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), { headers } );
	}

}
