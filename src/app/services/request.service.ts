import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RequestService {
	private AUTH_SERVER_ADDRESS : string;
	private HEADERS : Array<Array<string>>;
	private END_POINTS : Array<string>;
	private PARAMETERS : Array<string>;
	private headers : HttpHeaders;

	constructor(
		public httpClient : HttpClient
	) { 
		this.AUTH_SERVER_ADDRESS = 'http://192.168.100.100:8000/api/';
		this.HEADERS = [['Content-Type', 'application/json'], ['Authorization', ''], ['responseType','text']];
		this.END_POINTS = ['login', 'register', 'publications', 'assist', 'join', 'joined'];
		this.PARAMETERS = ['?page=', '?id_detail=', '/'];
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
			case 'assist':
				return this.END_POINTS[3];
			case 'join':
				return this.END_POINTS[4];
			case 'joined':
				return this.END_POINTS[5];
			default:
				break;
		}
		return 
	}

	private selectParameters(parameters:string){
		switch (parameters) {
			case 'page':
				return this.PARAMETERS[0];
			case 'id_detail':
				return this.PARAMETERS[1];
			case 'id':
				return this.PARAMETERS[2];
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
					if(token != null ){
						this.headers = this.headers.set(Header[0], token);
					}
				}
				else {
					this.headers = this.headers.set(Header[0], Header[1]);
				}	
			});
		}
		return this.headers;
	}

	public createRequest(object: any, endPoint: string, post: boolean, token?: string) : Observable<any> {
		const headers = this.createHeaders( post, token);
		return this.httpClient.post<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), object,  { headers } );
	}

	public createRequestGet(endPoint: string, post: boolean, token?: string, parameter?:number, typeParameter?:string) : Observable<any> {
		const headers = this.createHeaders( post, token);
		if(parameter){
			return this.httpClient.get<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint)+ this.selectParameters(typeParameter) +parameter, { headers } );
		}else{
			return this.httpClient.get<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), { headers } );
		}
	}

	public createRequestUpdate(parameter: string, endPoint: string, post: boolean, token?: string, id?:number) : Observable<any> {
		const headers = this.createHeaders( post, token);
		console.log(headers);
		return this.httpClient.put<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint) + this.selectParameters(parameter) + id , id, { headers } );
	}

}
