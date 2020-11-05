import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/Models/Classes/user';
import { RequestService } from '../request.service';

@Injectable({
	providedIn: 'root'
})

export class AuthService {

	authSubject = new BehaviorSubject(false);
	authResponse: Response;

	constructor(
		public httpClient: HttpClient,
		private request: RequestService
	) { }

	public register(user: User): Promise<Observable<any>> {
		return new Promise((resolve, reject) => {
			this.request.createRequestPost('register', user).then((client) => {
				resolve(client);
			}).catch((error)=> {
				reject(error)
			})
		});
		//return this.request.createRequestPost('register', user);
	}

	public login(user: User): Promise<Observable<any>> {
		return new Promise((resolve, reject) => {
			this.request.createRequestPost('login', user).then((client) => {
				resolve(client);
			}).catch((error) => {
				reject(error);
			});
		});
		//return this.request.createRequestPost('login', user);
	}
}
