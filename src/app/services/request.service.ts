import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
		this.AUTH_SERVER_ADDRESS = 'http://192.168.0.9:8000/api/';
		this.HEADERS = [['Content-Type', 'application/json']];
		this.END_POINTS = ['login', 'register', 'publication'];
		this.headers = new HttpHeaders();
	}

	private selectEnpoint(endPoint:string){
		switch (endPoint) {
			case 'login':
				return this.END_POINTS[0];
				break;
			case 'register':
				return this.END_POINTS[1];
			case 'publication':
				return this.END_POINTS[2];
			default:
				break;
		}
		return 
	}

	private createHeaders() : HttpHeaders {
		this.HEADERS.forEach(Header => {
			this.headers = this.headers.append(Header[0], Header[1]);
		});
		return this.headers;
	}

	public createRequest(object: any, endPoint: string) : any {
		const headers = this.createHeaders();
		return this.httpClient.post<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), object,  { headers } );
	}
}
