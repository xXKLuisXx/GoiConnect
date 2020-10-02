import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Publication } from 'src/app/services/publication';
import { PublicationService } from 'src/app/services/publication.service';
import { Utils } from 'src/app/Models/Classes/utils';
import { AccessUserData } from 'src/app/Models/Classes/access-user-data';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'app-publication',
	templateUrl: './publication.page.html',
	styleUrls: ['./publication.page.scss'],
})
export class PublicationPage implements OnInit {

	public publication: Publication = {
		title: "",
		description: "",
		monetized:false,
		multimedia: []
	}
	private utils: Utils;
	public src: string;
	private accessdata: AccessUserData;
	//private accessdata: any;


	constructor(
		private router: Router,
		private route: ActivatedRoute,
		public publicationService: PublicationService
	) { 
		this.utils = new Utils();
	}

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			this.accessdata = new AccessUserData(JSON.parse(params['accessdata']).token_type, JSON.parse(params['accessdata']).expires_in, JSON.parse(params['accessdata']).access_token, JSON.parse(params['accessdata']).refresh_token);
		});
		console.log(this.accessdata);
		this.publication = this.publicationService.publication;
		this.src = this.publication.multimedia[0].base;

	}

	public  home() {
		let navigationExtras: NavigationExtras = {
			queryParams: {
				accessdata: JSON.stringify(this.accessdata),
			},
			replaceUrl: true,
		};
		//console.log(this.accessdata);
		this.router.navigate(['/social'], navigationExtras);
	}

	public async post() {
		this.home();
		await this.utils.loadingPresent();
		this.publicationService.post(this.publication, this.accessdata.getAuthorization()).subscribe(
			async (Response: (any)) => {
				this.publication={
					title: "",
					description: "",
					monetized:false,
					multimedia: []
				}
				this.utils.loadingDismiss();
				this.utils.alertPresent('Exito', 'Publicación realizada con exito', 'OK' );
				this.home();
			},
			(Errors: (any)) => {
				this.utils.loadingDismiss();
				console.log(Errors);
				this.utils.alertPresent('Errors', this.utils.buildErrors(Errors), 'OK');
			},
			() => {		
			}
		);
	}

}
