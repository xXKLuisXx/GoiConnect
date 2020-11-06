import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CaptureError, CaptureImageOptions, MediaCapture, MediaFile } from '@ionic-native/media-capture/ngx';
import { Publication } from '../../../Models/Classes/publication';
import { PublicationService } from 'src/app/services/publication.service';
import { Utils } from 'src/app/Models/Classes/utils';
import { AccessUserData } from 'src/app/Models/Classes/access-user-data';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { ModalController } from '@ionic/angular';
import { LodgingComponent } from 'src/app/components/lodging/lodging.component';


@Component({
	selector: 'app-publication',
	templateUrl: './publication.page.html',
	styleUrls: ['./publication.page.scss'],
})
export class PublicationPage implements OnInit {

	public publication: Publication;
	private utils: Utils;
	private isVideo: boolean;
	private src: string;
	private videoExist: boolean = false;
	private accessdata: AccessUserData;
	private typePublication = null;
	private hospedaje = false;
	private checkIn: string; 
	private checkOut: string;
	private multimediaSelected: boolean;
	public postPublication:boolean;
		
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		public publicationService: PublicationService,
		private sanitizer: DomSanitizer,
		private camera: Camera,
		private mediaCapture: MediaCapture,
		public actionSheetController: ActionSheetController,
		private imagePicker: ImagePicker,
		private base64: Base64,
		public modalController: ModalController
	) { 
		this.utils = new Utils();
		this.publication = new Publication();
	}

	async ngOnInit() {	

		this.multimediaSelected = true;
		this.postPublication = true;

		await this.utils.getAccessData();

		this.route.queryParams.subscribe(params=>{
			if(params){
				let queryParams = params;
				this.typePublication = queryParams.type;
			}
		})
	}

	postChange(event) {
		this.postPublication = event;
		console.log(this.postPublication);
	}

	public getImgContent():SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(this.src);
	}
	
	async presentModal() {

		if(this.typePublication == 8){
			let modal = await this.modalController.create({
				component: LodgingComponent
			  });
			  return await modal.present();
		}
		
	}

	public async post() {

		if(this.publication.typeContent == null) this.publication.typeContent = 7;

		await this.utils.loadingPresent();

		this.publicationService.post(this.publication, this.utils.accessUserData.getAuthorization()).subscribe(
			async (Response: (any)) => {
				this.publication = new Publication();
				console.log(Response);
				this.publicationService.publication = new Publication();

				this.utils.loadingDismiss();
				this.updatePublications();
				this.src = ""; 
				this.utils.alertPresent('Exito', 'Publicación realizada con exito', 'OK' );
				this.router.navigate(['social']);
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

	async menuCamera() {
		const actionSheet = await this.actionSheetController.create({
			header: "Select Image source",
			buttons: [{
				text: 'Foto',
				handler: () => {
					this.takePhoto(this.camera.PictureSourceType.CAMERA);
				}
			},
			{
				text: 'Video',
				handler: () => {
					this.takeVideo();
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

	async menuMultimedia(){
		const actionSheet = await this.actionSheetController.create({
			header: "Select gallery",
			buttons: [{
				text: 'Imagen',
				handler: () => {
					this.pickImages();
				}
			},
			{
				text: 'Video',
				handler: () => {
					this.pickVideo(this.camera.PictureSourceType.PHOTOLIBRARY);
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

		const options = {
			maximumImagesCount: 5,
			quality: 100,
			outputType: 0
		};

		this.imagePicker.getPictures(options).then(async(images) => {
				for (var i = 0; i < images.length; i++) {
					const extensionImage = images[i].substr(images[i].lastIndexOf('.') + 1); 
					 await this.base64.encodeFile(images[i]).then((base64File: string) => {
						 this.publication.multimedia.push({ base: base64File, ext: extensionImage  });			
					}, (err) => {
						console.log(err);
					});
				}

				if (this.publication.multimedia.length != 0){
					this.multimediaSelected = false;
					this.src = this.publication.multimedia[0].base;
					if(this.publication.multimedia[0].ext != 'mp4') this.isVideo = false;
				}
		}, (err) => {
			console.log(err);
		});
	}

	public async takePhoto(sourceType) {
		const options: CameraOptions = {
			quality: 100,
			sourceType: sourceType,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			correctOrientation: true
		}
		this.camera.getPicture(options).then((imageData) => {
			this.publication.multimedia.push({ base: 'data:image/jpg;base64,' + imageData, ext: 'jpg' });
			this.publicationService.publication = this.publication;
			if (this.publication.multimedia != null) {
				//this.publication = new Publication();
				this.multimediaSelected = false;
				this.src = this.publication.multimedia[0].base;
				if(this.publication.multimedia[0].ext != 'mp4') this.isVideo = false;
			}
		}, (err) => {
			
		});
	}

	public async takeVideo() {
		let options: CaptureImageOptions = { limit: 1 }
		await this.mediaCapture.captureVideo(options).then(async (data: MediaFile[]) => {
			await this.base64.encodeFile(data[0].fullPath).then((base64File: string) => {

				this.publication.multimedia.push({ base: base64File, ext: 'mp4' });
				this.publicationService.publication = this.publication
				if (this.publication.multimedia != null) {
					this.multimediaSelected = false;
					this.src = this.publication.multimedia[0].base;
					if(this.publication.multimedia[0].ext != 'mp4') this.isVideo = false;
					else{
						this.isVideo = true;
					}
					//this.router.navigate(['social/social-publication']);
				}
			}, (err) => {
				console.log(err);
			});
		}, (err: CaptureError) => {
			console.log(err);
		});
	}

	public pickVideo(sourceType) {
		const options: CameraOptions = {
			mediaType: this.camera.MediaType.VIDEO,
			sourceType: sourceType
		}
		this.camera.getPicture(options)
		.then(async (videoUrl) => {
			if (videoUrl) {
				var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
				dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;

				await this.base64.encodeFile('file://' + videoUrl).then((base64File: string) => {
					this.publication.multimedia.push({ base: base64File, ext: 'mp4' });
					this.publicationService.publication = this.publication;

					if (this.publication.multimedia != null) {
						this.src = this.publication.multimedia[0].base;
						if(this.publication.multimedia[0].ext != 'mp4') this.isVideo = false;
						else{
							this.isVideo = true;
						}
						this.multimediaSelected = false;
					}
				}, (err) => {
					console.log(err);
				});
			}
		})
		.catch(err => {
				console.log(err);
		});
	}

	updatePublications() {
		this.publicationService.updatePublications();
	}

	showMessage(){
		console.log(this.publication);
	}
	

	async publications() {
		const actionSheet = await this.actionSheetController.create({
			header: "Select Type Publication",
			buttons: [{
				text: 'Hospedaje',
				handler: () => {
					this.router.navigate(['social/social-publication/lodging']);
				}
			},
			{
				text: 'Evento',
				handler: () => {
					this.takeVideo();
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

	async addMultimedia() {
		const actionSheet = await this.actionSheetController.create({
		  header: 'Publicaciones',
		  cssClass: 'my-custom-class',
		  buttons: [{
			text: 'Imagen / Video',
			icon: 'image',
			handler: () => {
			  this.menuMultimedia();
			}
		  }, {
			text: 'Cámara',
			icon: 'camera',
			handler: () => {
			  this.menuCamera();
			}
		  }, {
			text: 'Cancel',
			icon: 'close',
			role: 'cancel',
			handler: () => {
			  console.log('Cancel clicked');
			}
		  }]
		});
		await actionSheet.present();
	  }
}
