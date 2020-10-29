import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.page.html',
  styleUrls: ['./lodging.page.scss'],
})
export class LodgingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


 /* public getPublications() {
		this.publicationService.getPublications(this.utils.accessUserData.getAuthorization(), this.currentPage).subscribe(
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
	}*/

}
