import { Component, Input, OnInit } from '@angular/core';
import { Join } from 'src/app/Models/Classes/join';
import { Publication } from 'src/app/Models/Classes/publication';
import { Utils } from 'src/app/Models/Classes/utils';
import { JoinService } from 'src/app/services/join.service';

@Component({
  selector: 'app-entertainment-template',
  templateUrl: './entertainment-template.component.html',
  styleUrls: ['./entertainment-template.component.scss'],
})
export class EntertainmentTemplateComponent implements OnInit {

  @Input() publication: Publication;
  private typeContent: string;
  private utils: Utils;
  private joined: boolean;
  
  constructor( public joinService:JoinService ) {
	
	this.utils = new Utils();
   }

  async ngOnInit() {
	this.typeContent = this.publication.typeContent.toString(); 
	await this.utils.getAccessData().then(()=>{
		this.isJoined();
	});
		
  }

  public async joinEvent(){
	  let partakerType: number;

	if(Number(this.typeContent) == 9){
		partakerType = 2; 
	}else{
		partakerType = 1;
	}

	const join = new Join(this.publication.id_detail, partakerType);
	console.log(this.utils.accessUserData.getAuthorization());

	await this.utils.loadingPresent();
		this.joinService.join(join, this.utils.accessUserData.getAuthorization()).subscribe(
			async (Response: (any)) => {
				this.isJoined();
				this.utils.loadingDismiss();
			},
			(Errors: (any)) => {
				this.utils.loadingDismiss();
				this.utils.alertPresent('Errors', this.utils.buildErrors(Errors), 'OK');
			},
			() => {		
			}
		);
  }

  public async changeUnion(){
	this.joinService.existJoin(this.utils.accessUserData.getAuthorization(), this.publication.id_detail).subscribe(
		(Response: (any)) => {
			this.joined = Response;

			if(this.joined == false){
				this.joinEvent();
			}else{
				this.updateJoin();
			}
		},
		(Errors: (any)) => {
			console.log(Errors);
		},
		() => {
		}
	);
  }

  public async updateJoin(){
	await this.utils.loadingPresent();
	this.joinService.updateJoin(this.utils.accessUserData.getAuthorization(), this.publication.id_detail).subscribe(
		(Response: (any)) => {
			console.log(Response);
			this.isJoined();
			this.utils.loadingDismiss();
		},
		(Errors: (any)) => {
			console.log(Errors);
		},
		() => {
		}
	);	
  }

  public async isJoined(){
	  console.log(this.publication.id_detail);
	this.joinService.isJoined(this.utils.accessUserData.getAuthorization(), this.publication.id_detail).subscribe(
		(Response: (any)) => {
			if(Response == 0) this.joined = true;
			else this.joined = false;
		},
		(Errors: (any)) => {
			console.log(Errors);
		},
		() => {
		}
	);
  }
}
