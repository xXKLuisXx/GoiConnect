import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, ModalController, Platform } from '@ionic/angular';
import { PublicationService } from '../../../services/publication.service';
import { Publication } from '../../../Models/Classes/publication';
import { Utils } from 'src/app/Models/Classes/utils';
import { IonInfiniteScroll } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { PublicationInt } from 'src/app/Models/Interfaces/publication-int';
import { NavigationExtras, Router } from '@angular/router';
import { LodgingComponent } from 'src/app/components/lodging/lodging.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

	@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
	@ViewChild(IonContent) content: IonContent;

	public publication: Publication;
	public publications$: Observable<PublicationInt[]>;
	public selectedVideo: string;
	private currentPage: number;
	private contPublications: number;
	private total: number;
	private scrollEnd: boolean;

	constructor(
		public actionSheetController: ActionSheetController,
		public publicationService: PublicationService,
		private platform: Platform,
		private router: Router,
		public modalController: ModalController,
		private utils: Utils
	) {
		this.scrollEnd = false;
		this.publication = new Publication();

		publicationService.updatePublication$.subscribe(
			update => {
				console.log('Actualizado');
				this.getPublications();
			}
		);
	}


	async ngOnInit() {
		await this.platform.ready().then(async () => {
			await this.utils.getAccessData().then(() => {
				console.log("exito");
				this.getPublications();
			}).catch((error) => {
				console.log(error);
			});
		});

		this.total = 0;
		this.contPublications = 0;
		this.currentPage = 1;
	}


	loadData(event) {
		setTimeout(() => {
			if (this.contPublications == this.total) {
				this.scrollEnd = true;
				event.target.disabled = true;
			}
			else {
				console.log('Cargando siguientes...');
				this.getPublications();
				event.target.complete();
			}
		}, 500);
	}

	scrollToTop() {
		this.content.scrollToTop(400);
		this.scrollEnd = false;
	}

	toggleInfiniteScroll() {
		this.scrollEnd = false;
		this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
	}

	//getPublications() Obtiene las publicaciones del usuario
	public getPublications() {
		this.publicationService.getPublications(this.currentPage).then((observable) => {
			console.log(observable);
			observable.subscribe(
				(response) => {
					console.log(response);
				},
				(error) => {
					console.log(error);
				},
				() => {

				}
			)
		}).catch(error => {
		});
		/*
		(Response: (any)) => {
			let array: Array<Publication>;
			array = new Array();

			Response.data.forEach(element => {
				let $publicationObj = new Publication(element);
				array.push($publicationObj);

			});

			this.publications$ = of(array);

			this.publications$.subscribe(data => {
			});

			if (this.currentPage != Response.last_page) {
				let page = Response.next_page_url.split('=');
				this.currentPage = Number(page[1]);
				this.contPublications += Response.per_page;
				this.total = Response.total;
			}
			else {
				this.contPublications += Response.data.length;
				this.total = Response.total;
			}
		},
		(Errors: (any)) => {
			console.log(Errors);
		}
		*/
	}


	pagePublication(typePublication:number){
		let navigationExtras: NavigationExtras = {
			queryParams: {
				type: typePublication
			}
		};
		this.router.navigate(['social/social-publication'], navigationExtras);
	}

	async presentActionSheet() {
		const actionSheet = await this.actionSheetController.create({
		  header: 'Publicaciones',
		  cssClass: 'my-custom-class',
		  buttons: [{
			text: 'Estado',
			icon: 'bulb',
			handler: () => {
				this.pagePublication(1);
			}
		  }, {
			text: 'Hospedajes',
			icon: 'bed',
			handler: () => {
				this.pagePublication(2);
			}
		  }, {
			text: 'Eventos',
			icon: 'american-football',
			handler: () => {
			  console.log('Play clicked');
			}
		  }, {
			text: 'Viajes',
			icon: 'airplane',
			handler: () => {
			  console.log('Favorite clicked');
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

	  async presentModal() {

			let modal = await this.modalController.create({
				component: LodgingComponent
			  });
			  return await modal.present();
		
	}
	
}
