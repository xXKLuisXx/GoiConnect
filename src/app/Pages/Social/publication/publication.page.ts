import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Publication } from 'src/app/services/publication';
import { PublicationService } from 'src/app/services/publication.service';
import { LoadingController,AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthResponse } from '../../../Auth/auth-response';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.page.html',
  styleUrls: ['./publication.page.scss'],
})
export class PublicationPage implements OnInit {

  public publication: Publication = {
    title : "",
    description : "",
    multimedia : []
  }

  public src: string;
  private token: string;
  private authResponse : AuthResponse;

  constructor(private router: Router,
              public authService: PublicationService,
              public alertController: AlertController,
              private nativeStorage: NativeStorage,
              private route: ActivatedRoute,
              public loadingController: LoadingController
              ) { }

  ngOnInit() {
    this.initializeAuthResponse();
    this.getAccessDataUser();
    this.publication = this.authService.publication;
    this.src= this.publication.multimedia[0].base;
    console.log(this.token);
  }

  async home(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });
    await this.presentLoading(loading);

    this.router.navigate(['/social-home']);
    loading.dismiss();
  }

  private initializeAuthResponse() {
    this.authResponse = {
      response :{
        name: "",
        status: 0,
        statusText: "",
        accessUserData : {
          token_type:"",
          expires_in:0,
          access_token:"",
          refresh_token:""
        },
        errors : {
          formErrors : {
            name : [],
            email : [],
            password : []
          },
          dbErrors : {
            error : "",
            message : ""
          }
        }
      }
    };
  }

  async presentAlert( message ) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading(loading) {
    await loading.present();
  }

  private async getAccessDataUser(){
    await this.nativeStorage.getItem('AccessDataUser').then(
      data => {
        this.authResponse.response.accessUserData = data;
        this.token = 'Bearer ' + this.authResponse.response.accessUserData.access_token;
      },
      error => console.error(error)
    );
  }

  async post() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });
    await this.presentLoading(loading);

    this.authService.post(this.publication, this.token).subscribe(
      async ( Response: (any) ) => {
        loading.dismiss();
        this.home();
        this.presentAlert(JSON.stringify(Response));
        
        this.publication = {
          title : "",
          description : "",
          multimedia : []
        }
      },
      ( Errors: (any) ) => {
        this.presentAlert(JSON.stringify(Errors));
      },
      () => {
        //this.presentAlert('Termino');
      }
    );
  }

}
