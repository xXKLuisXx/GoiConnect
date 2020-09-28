import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { PublicationService } from '../../../services/publication.service';

import { Publication } from '../../../services/publication';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public publication: Publication = {
    title : "Titulo de la publicacion",
    description : "",
    image : "",
    content_type: 2
  }

  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    public authService: PublicationService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  } 


  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.croppedImagepath = 'data:image/jpeg;base64,' + imageData;
      this.publication.image = this.croppedImagepath;
    }, (err) => {
      // Handle error 
    });
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

  public post() {
    
    this.authService.post(this.publication).subscribe(
      async ( Response: (any) ) => {
        this.presentAlert( "Publicación realizada con exito" );
        
        this.publication = {
          title : "Titulo de la publicacion",
          description : "",
          image : "",
          content_type:2
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
