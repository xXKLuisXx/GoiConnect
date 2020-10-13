import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { Publication } from 'src/app/services/publication';
import { PublicationService } from 'src/app/services/publication.service';
import { Utils } from 'src/app/Models/Classes/utils';
import { AccessUserData } from 'src/app/Models/Classes/access-user-data';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
//import { Base64 } from '@ionic-native/base64/ngx';


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
		private sanitizer: DomSanitizer,
		private platform: Platform,
		public actionSheetController: ActionSheetController,
		private imagePicker: ImagePicker,
		//private base64: Base64
	) { 
		this.utils = new Utils();
	}

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			this.accessdata = this.utils.buildAccessData(params);
		});
		
		this.publication = this.publicationService.publication;
		this.src = this.publication.multimedia[0].base;
		if(this.publication.multimedia[0].ext != 'mp4') this.isVideo = false;
		else this.isVideo = true;

		this.platform.backButton.subscribeWithPriority(10, () => {
			this.router.navigate(['social']);
		});
	}

	/*
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

	async menuImage() {
		const actionSheet = await this.actionSheetController.create({
			header: "Select Image source",
			buttons: [{
				text: 'Load from Library',
				handler: () => {
					this.pickImages();
				}
			},
			{
				text: 'Use Camera',
				handler: () => {
					//this.pickImage(this.camera.PictureSourceType.CAMERA);
				}
			},
			{
				text: 'Cancel',
				role: 'cancel'
			}
			]
		});
		await actionSheet.present();
	}

	
	public pickImages() {

		let navigationExtras: NavigationExtras = {
			queryParams: {
				accessdata: JSON.stringify(this.accessdata),
			},
			replaceUrl: true,
		};

		const options = {
			maximumImagesCount: 5,
			quality: 100,
			outputType: 0
		};

		this.imagePicker.getPictures(options).then(async(images) => {
			console.log(images);
				for (var i = 0; i < images.length; i++) {
					const extensionImage = images[i].substr(images[i].lastIndexOf('.') + 1); 
					 await this.base64.encodeFile(images[i]).then((base64File: string) => {
						 this.publication.multimedia.push({ base: base64File, ext: extensionImage  });			
					}, (err) => {
						console.log(err);
					});
				}

				this.publicationService.publication = this.publication;
				console.log('Tamanio: ',this.publication.multimedia.length);
				if (this.publication.multimedia.length != 0){
					this.router.navigate(['social/social-publication'], navigationExtras);
				}
			//}
		}, (err) => {
			console.log(err);
		});
	}
	*/
}
