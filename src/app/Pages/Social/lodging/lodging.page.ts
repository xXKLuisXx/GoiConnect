import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { Publication } from 'src/app/Models/Classes/publication';
import { Utils } from 'src/app/Models/Classes/utils';
import { PublicationInt } from 'src/app/Models/Interfaces/publication-int';
import { PublicationService } from 'src/app/services/publication.service';
import { LodgingDetailPage } from './lodging-detail/lodging-detail.page';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.page.html',
  styleUrls: ['./lodging.page.scss'],
})
export class LodgingPage implements OnInit {

	lodgingPage = LodgingDetailPage;

	private utils: Utils;
	private currentPage: number;
	public publications$: Observable <PublicationInt[]>;
	private contPublications: number;
	private total: number;
	private showDetail: boolean;

  constructor(public publicationService: PublicationService,
			  private platform: Platform,
			  private router: Router) { 
	this.utils = new Utils();
  }

  async ngOnInit() {
	this.currentPage = 1;

	await this.platform.ready().then(async () => {
		await this.utils.getAccessData().then(() => {
			console.log("exito");
			this.getPublications();
			this.showDetail = false;		
		}).catch((error) => {
			console.log(error);
		});
	});
  }


 public getPublications() {
		this.publicationService.getPublications(this.utils.accessUserData.getAuthorization(), 'lodgings' ,this.currentPage).subscribe(
			(Response: (any)) => {
				let array: Array<Publication>;
				array = new Array();

				console.log(Response);

				Response.data.forEach(element => {
					let $publicationObj = new Publication(element);
					array.push($publicationObj);
					
				});

				
				this.publications$ = of(array);
				this.publications$.subscribe(data=>{
					console.log('subscriber');
					console.log(data);
				});

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

	goToDetail(){
		this.router.navigate(['social/lodging/lodging-detail']);
	}

}
