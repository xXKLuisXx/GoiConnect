import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';
import { PublicationService } from '../../../services/publication.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Publication } from '../../../Models/Classes/publication';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Utils } from 'src/app/Models/Classes/utils';
import { Router } from '@angular/router';
import { CaptureError, CaptureImageOptions, MediaCapture, MediaFile } from '@ionic-native/media-capture/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { IonInfiniteScroll } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { PublicationInt } from 'src/app/Models/Interfaces/publication-int';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

	@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
	@ViewChild(IonContent) content: IonContent;

	public publication: Publication; 
	public publications$: Observable <PublicationInt[]>;
	public selectedVideo: string;
	private utils: Utils;
	private currentPage: number;
	private contPublications: number;
	private total: number;
	private scrollEnd: boolean;

	croppedImagepath = "";
	isLoading = false;

	imagePickerOptions = {
		maximumImagesCount: 1,
		quality: 50
	};


	constructor(
		private camera: Camera,
		public actionSheetController: ActionSheetController,
		public publicationService: PublicationService,
		private imagePicker: ImagePicker,
		private router: Router,
		private mediaCapture: MediaCapture,
		private base64: Base64,
		private platform: Platform
	) {
		this.utils = new Utils();
		this.scrollEnd = true;
		this.publication = new Publication();

		publicationService.updatePublication$.subscribe(
			update => {
			  console.log('Actualizado');
			  this.getPublications();
			});
	}
	
	async ngOnInit() {
		await this.platform.ready().then(async () => {
			await this.utils.getAccessData().then(() => {
				console.log("exito");		
			}).catch((error) => {
				console.log(error);
			});
		});

		this.total = 0;
		this.contPublications = 0;
		this.currentPage = 1;
		this.getPublications();
		console.log(this.publications$);
	}

	loadData(event) {
		setTimeout(() => {
			if(this.contPublications == this.total){
				this.scrollEnd = true;
				event.target.disabled = true;
			}
			else{
				console.log('Cargando siguientes...');
				this.getPublications();
				event.target.complete();
			}
		}, 500);
	}

	scrollToTop() {
		this.content.scrollToTop(400);
	}

	toggleInfiniteScroll() {
		this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
	}
	
	public post() {
		this.utils.loadingPresent();
		this.publication.title = 'lo que sea';
		this.publicationService.post(this.publication, this.utils.accessUserData.getAuthorization()).subscribe(
			async (Response: (any)) => {
				this.utils.loadingDismiss();
				this.publication = new Publication();
				this.utils.alertPresent('Exito', 'Publicación realizada con exito', 'OK');
			},
			(Errors: (any)) => {
				console.log(Errors);
			},
			() => {
			}
		);
	}

	public getPublications() {
		this.publicationService.getPublications(this.utils.accessUserData.getAuthorization(), this.currentPage).subscribe(
			(Response: (any)) => {
				console.log(Response.data);
				let array: Array<Publication>;
				array = new Array();

				Response.data.forEach(element => {
					let $publicationObj = new Publication(element);
					array.push($publicationObj);
				});
				
				this.publications$ = of(array);

				if(this.currentPage != Response.last_page){
					let page = Response.next_page_url.split('=');
					this.currentPage = Number(page[1]);
					this.contPublications += Response.per_page;
					this.total = Response.total;
				}
				else{
					this.contPublications += Response.data.length;
					this.total = Response.total;
				}
			},
			(Errors: (any)) => {
				console.log(Errors);
			},
			() => {
			}
		);
	}

	public isVideo(publication) {
		console.log(publication);
		let extension = publication.substr(13);
		if (extension == 'mp4') return true;
		else return false;
	}

	public async convertToBase64(path) {
		return await this.base64.encodeFile(path).then((base64File: string) => {
			return base64File;
		}, (err) => {
			return false;
		});
	}

	public pagePublication(){
		this.router.navigate(['social/social-publication']);
	}
}
