import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';

import { ActionSheetController } from '@ionic/angular';
import { PublicationService } from '../../../services/publication/publication.service';
import { AuthResponse } from 'src/app/Auth/auth-response';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private authResponse : AuthResponse
  croppedImagePath = "";
  isLoading = false;
  token:string

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  publication = JSON.stringify({
    title: "Titulo de la publicacion",
    description: "Descrpccion 24 de septiembre"
  });
  publication2 = {}




  constructor(
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private http: PublicationService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    
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


  pickImage( sourceType ) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {

      this.croppedImagePath = 'data:image/jpeg;base64,' + imageData;
      this.publication2 = {image: this.croppedImagePath};
      console.log(this.publication2);
      
    }, (err) => {
      console.log(err);
    });

    //this.presentAlert( JSON.stringify( this.publication2));

    this.http.postPublication(this.publication2).subscribe(
      async ( Response : (any) ) => {
        this.presentAlert( JSON.stringify( Response));
      },
      ( Errors : (any) ) => {
        this.presentAlert( JSON.stringify( Errors));
      },
      () => {
        console.log("Termino");
        
      } 
    );

    
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
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

}

