import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from  'rxjs';
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

	register(user: User): Observable<any>{
		return this.request.createRequest(user, 'register');
	}

	login(user: User): Observable<any> {
		return this.request.createRequest(user, 'login');
	}
}
