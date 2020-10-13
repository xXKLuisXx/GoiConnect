import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { AuthResponse } from './auth-response';
import { RequestService } from '../services/request.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	authSubject = new BehaviorSubject(false);
	authResponse: AuthResponse;
	postOff = false;

	constructor(
		public httpClient: HttpClient,
		private request: RequestService
	) { }

	register(user: User): Observable<AuthResponse> {
		return this.request.createRequest(user, 'register', this.postOff);
	}

	login(user: User): Observable<AuthResponse> {
		return this.request.createRequest(user, 'login', this.postOff);
	}

}
