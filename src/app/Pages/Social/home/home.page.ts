import { Component, OnInit } from '@angular/core';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { PublicationService } from '../../../services/publication.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Multimedia, Publication } from '../../../services/publication';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Utils } from 'src/app/Models/Classes/utils';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

	public publication: Publication = {
		title: "",
		description: "",
		monetized: false,
		multimedia: []
	}
	public heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
	public numHeroes:number = this.heroes.length;

	public publications:any = [];

	public multis: Multimedia;
	private accesData: any;

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
		public alertController: AlertController,
		private imagePicker: ImagePicker,
		private router: Router,
		private route: ActivatedRoute,
		public loadingController: LoadingController
	) { }

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			this.accesData = params;
		});

		//this.getPublications();
	}
	
	async pickImages() {
		let navigationExtras: NavigationExtras = {
			queryParams: {
				accessdata: this.accesData['accessdata'],
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
				this.publication.multimedia.push({ base: 'data:image/' + 'jpg' + ';base64,' + images[i], ext: 'jpg' });
			}
			this.publicationService.publication = this.publication;
			if(this.publication.multimedia.length != 0){
				this.router.navigate(['/publication'], navigationExtras);
			  }
			//this.utils.loadingdismiss();
		}, (err) => {
			console.log(err);
		});
	}

	async pickImage(sourceType) {
		let navigationExtras: NavigationExtras = {
			queryParams: {
				accessdata: this.accesData['accessdata'],
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
		  if(this.publication.multimedia != null){
			this.router.navigate(['/publication'], navigationExtras);
		  }
		  
		}, (err) => {
		  // Handle error 
		});
	}

	pickVideo(sourceType){
		const options: CameraOptions = {
			mediaType: this.camera.MediaType.VIDEO,
			sourceType: sourceType
		  }
		  this.camera.getPicture(options).then( async (videoUrl) => {
			if (videoUrl) {
			  var filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
			  var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
			  dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;

			  console.log(filename, ' ', dirpath);  
			}
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
	
	public async getPublications() {
		this.publicationService.getPublications(JSON.parse(this.accesData['accessdata']).token_type + ' ' + JSON.parse(this.accesData['accessdata']).access_token).subscribe(
			async (Response: (any)) => {
				//console.log(Response);
				//this.publications = Response;
				//console.log(this.publications[0].title);

			},
			(Errors: (any)) => {
				console.log(Errors);
			},
			() => {
			}
		);
	}


	

}
