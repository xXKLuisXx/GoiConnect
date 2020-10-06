import { Component, OnInit, ViewChild } from '@angular/core';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { PublicationService } from '../../../services/publication.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Multimedia, Publication } from '../../../services/publication';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Utils } from 'src/app/Models/Classes/utils';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AccessUserData } from 'src/app/Models/Classes/access-user-data';
import { FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

	@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

	public publication: Publication = {
		title: "",
		description: "",
		monetized: false,
		multimedia: []
	}

	public publications: any = [];

	public multis: Multimedia;
	private accesData: AccessUserData;
	public selectedVideo: string;
	private utils: Utils;

	croppedImagepath = "";
	isLoading = false;

	imagePickerOptions = {
		maximumImagesCount: 1,
		quality: 50
	};

	videoFileUpload: FileTransferObject;

	constructor(
		private camera: Camera,
		public actionSheetController: ActionSheetController,
		public publicationService: PublicationService,
		public alertController: AlertController,
		private imagePicker: ImagePicker,
		private router: Router,
		private nativeStorage: NativeStorage,
		private route: ActivatedRoute,
		public loadingController: LoadingController,
		private base64: Base64
	) {
		this.utils = new Utils();
	}

	ngOnInit() {
		console.log("prueba");
		this.route.queryParams.subscribe(params => {
			this.accesData = this.utils.buildAccessData(params);
			console.log(this.accesData);
		});
	}

	loadData(event){
		console.log('Cargando siguientes...');
	}

	private async getAccessDataUser() {
		await this.nativeStorage.getItem('AccessDataUser').then(
			data => {
				this.accesData = data;
				console.log('GETiTEM');
				console.log(this.accesData);
			},
			error => console.error(error)
		);
	}

	async pickImages() {

		let navigationExtras: NavigationExtras = {
			queryParams: {
				accessdata: JSON.stringify(this.accesData),
			},
			replaceUrl: true,
		};

		const options = {
			maximumImagesCount: 5,
			quality: 100,
			outputType: 1
		};

		this.imagePicker.getPictures(options).then((images) => {
			for (var i = 0; i < images.length; i++) {
				const extensionImage = images[i].substr(images[i].lastIndexOf('.') + 1);
				console.log('Extension image:');
				console.log(extensionImage);
				this.publication.multimedia.push({ base: 'data:image/' + 'jpg' + ';base64,' + images[i], ext: 'jpg' });
			}
			this.publicationService.publication = this.publication;
			console.log(this.publication.multimedia.length);
			if (this.publication.multimedia.length != 0) {
				this.router.navigate(['social/social-publication'], navigationExtras);
			}
			//this.utils.loadingdismiss();
		}, (err) => {
			console.log(err);
		});
	}

	async pickImage(sourceType) {
		let navigationExtras: NavigationExtras = {
			queryParams: {
				accessdata: JSON.stringify(this.accesData),
			},
			replaceUrl: true,
		};
		const options: CameraOptions = {
			quality: 100,
			sourceType: sourceType,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}
		this.camera.getPicture(options).then((imageData) => {
			this.publication.multimedia.push({ base: 'data:image/' + 'jpg' + ';base64,' + imageData, ext: 'jpg' });
			this.publicationService.publication = this.publication;
			if (this.publication.multimedia != null) {
				this.router.navigate(['social/social-publication'], navigationExtras);
			}

		}, (err) => {
			// Handle error 
		});
	}

	async pickVideo(sourceType) {
		let navigationExtras: NavigationExtras = {
			queryParams: {
				accessdata: JSON.stringify(this.accesData),
			},
			replaceUrl: true,
		};
		const options: CameraOptions = {
			mediaType: this.camera.MediaType.VIDEO,
			sourceType: sourceType,
			destinationType: this.camera.DestinationType.FILE_URI
		}
		await this.camera.getPicture(options).then(async (videoUrl) => {

			await this.base64.encodeFile('file://' + videoUrl).then((base64File: string) => {
				this.publication.multimedia.push({ base: base64File, ext: 'mp4' });
				this.publicationService.publication = this.publication;

				if (this.publication.multimedia != null) {
					this.router.navigate(['social/social-publication'], navigationExtras);
				}
			}, (err) => {
				console.log(err);
			});
		},

			(err) => {
				console.log(err);
			});
	}

	async selectVideo() {
		const actionSheet = await this.actionSheetController.create({
			header: "Select Video source",
			buttons: [{
				text: 'Load from Library',
				handler: () => {
					this.pickVideo(this.camera.PictureSourceType.PHOTOLIBRARY);
				}
			},
			{
				text: 'Use Camera',
				handler: () => {
					this.pickVideo(this.camera.PictureSourceType.CAMERA);
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

	public uploadVideo() {
	
	}



	async selectImage() {
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
					this.pickImage(this.camera.PictureSourceType.CAMERA);
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

	public post() {
		this.publicationService.post(this.publication, JSON.parse(this.accesData['accessdata']).token_type + ' ' + JSON.parse(this.accesData['accessdata']).access_token).subscribe(
			async (Response: (any)) => {

				this.publication = {
					title: "",
					description: "",
					monetized: false,
					multimedia: []
				}

				//this.utils.loadingDismiss();
				//this.utils.alertPresent('Exito', 'Publicación realizada con exito', 'OK' );
				console.log(Response);
			},
			(Errors: (any)) => {
				//this.utils.loadingDismiss();
				console.log(Errors);
				//this.utils.alertPresent('Errors', this.utils.buildErrors(Errors), 'OK');
			},
			() => {
				//this.presentAlert('Termino');
			}
		);
	}

	 getPublications() {
		 this.publicationService.getPublications(this.accesData.getAuthorization()).subscribe(
			async (Response: (any)) => {
				
				this.publications = Response;
				console.log(this.publications);
				
				
			},
			(Errors: (any)) => {
				console.log(Errors);
			},
			() => {
			}
		);
	}

	public isVideo(publication){
		let extension = publication.substr(13);
		if(extension == 'mp4') return true;
		else return false;
	}




}
