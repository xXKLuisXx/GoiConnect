import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publication } from '../Models/Classes/publication';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../services/request.service';
import { RequestResponse } from '../Models/Classes/request-response';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class PublicationService {
	public publication: Publication = new Publication();
	private updatePublication = new Subject<string>();

	updatePublication$ = this.updatePublication.asObservable();

	constructor(
		public httpClient: HttpClient,
		private request: RequestService
	) { }

	public updatePublications() {
		this.updatePublication.next();
	}

	public async postPublication(publication: Publication): Promise<Observable<RequestResponse>> {
		return new Promise((resolve, reject) => {
			this.request.createRequestPost('publication', publication).then((client) => {
				resolve(client);
			}).catch((error)=> {
				reject(error);
			})
		});
	}

	public async getPublications(actualPage: number): Promise<Observable<RequestResponse>> {
		return new Promise((resolve, reject) =>{
			this.request.createRequestGet('publication', { "page": actualPage }).then((client) => {
				console.log("penultimo");
				resolve(client);
			}).catch((error) => {
				reject(error);
			})
		});
	}
}
