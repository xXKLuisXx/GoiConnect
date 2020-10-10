import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { Publication } from 'src/app/services/publication';
import { PublicationService } from 'src/app/services/publication.service';
import { Utils } from 'src/app/Models/Classes/utils';
import { AccessUserData } from 'src/app/Models/Classes/access-user-data';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


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
	private isVideo: boolean;
	public src: string;
	public videoExist: boolean = false;
	private accessdata: AccessUserData;
	
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		public publicationService: PublicationService,
		private sanitizer: DomSanitizer
	) { 
		this.utils = new Utils();
	}

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			this.accessdata = this.utils.buildAccessData(params);
			console.log(this.accessdata);
		});
		console.log("asdads");
		this.publication = this.publicationService.publication;
		console.log(this.publication.multimedia);
		this.src = this.publication.multimedia[0].base;
		if(this.publication.multimedia[0].ext != 'mp4') this.isVideo = false;
		else this.isVideo = true;
	}

	getImgContent():SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(this.src);
    }

	public  home() {
		let navigationExtras: NavigationExtras = {
			queryParams: {
				accessdata: JSON.stringify(this.accessdata),
			},
			replaceUrl: true,
		};
		this.router.navigate(['social'],navigationExtras);
	}

	public async post() {
		await this.utils.loadingPresent();
		console.log(this.publication);
		this.publicationService.post(this.publication, this.accessdata.getAuthorization()).subscribe(
			async (Response: (any)) => {
				this.publication={
					title: "",
					description: "",
					monetized:false,
					multimedia: []
				}

				this.publicationService.publication = {
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
