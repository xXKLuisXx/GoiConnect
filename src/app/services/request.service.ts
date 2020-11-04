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
		this.AUTH_SERVER_ADDRESS = 'http://192.168.0.10:8000/api/';
		this.HEADERS = [['Content-Type', 'application/json'], ['Authorization', ''], ['responseType','text']];
		this.END_POINTS = ['login', 'register', 'publications', 'assist', 'join', 'joined','lodgings'];
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
			case 'lodgings':
				return this.END_POINTS[6];	
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

	private getParameters( parameters: Array<any>){
		parameters.forEach((value, index, parameters)=>{
			
		})
	}

	private createHeaders( token?: string ) : HttpHeaders {
		if(token){
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
		else{
			this.headers = this.headers.set(this.HEADERS[0][0], this.HEADERS[0][1]);
		}
		return this.headers;
	}

	public createRequest(object: any, endPoint: string, token?: string) : Observable<any> {
		let headers:any;
		if(token != null){
			headers = this.createHeaders(token);
		}
		else{
			headers = this.createHeaders();
		}
		return this.httpClient.post<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), object, { headers } );
	}

	public createRequestGet(endPoint: string, token?: string, parameters?:number, typeParameter?:string) : Observable<any> {
		const headers = this.createHeaders(token);
		if(parameters){
			return this.httpClient.get<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint)+ this.selectParameters(typeParameter) + parameters, { headers } );
		}else{
			return this.httpClient.get<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), { headers } );
		}
	}

	public createRequestUpdate(endPoint: string, token?: string, id?:number) : Observable<any> {
		const headers = this.createHeaders(token);
		console.log(headers);
		return this.httpClient.put<any>(this.AUTH_SERVER_ADDRESS + this.selectEnpoint(endPoint), id, { headers } );
	}
}
