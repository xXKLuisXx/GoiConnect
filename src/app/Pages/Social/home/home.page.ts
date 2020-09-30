import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { PublicationService } from '../../../services/publication.service';
import { AuthResponse } from '../../../Auth/auth-response';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Multimedia, Publication } from '../../../services/publication';
import { AlertController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public publication: Publication = {
    title : "",
    description : "",
    multimedia : []
  }

  public multis: Multimedia;

  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  private authResponse : AuthResponse;
  private token: string;

  constructor(
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    public authService: PublicationService,
    public alertController: AlertController,
    private nativeStorage : NativeStorage,
    private imagePicker: ImagePicker,
    private router: Router,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.initializeAuthResponse();
    this.getAccessDataUser();
    console.log(this.token);
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

  async presentLoading(loading) {
    await loading.present();
  }

  async pickImages () {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });
    await this.presentLoading(loading);

    const options = {
       maximumImagesCount: 5,
       quality: 100,
       outputType: 1
   };
     
     this.imagePicker.getPictures(options).then((images) => {
       for (var i = 0; i < images.length; i++) {
          const extensionImage = images[i].substr(images[i].lastIndexOf('.') + 1); 
          this.publication.multimedia.push( {base: 'data:image/'+ 'jpg' +';base64,'  + images[i], ext: 'jpg'} );
           //console.log(this.publication.multimedia);
       }
       this.authService.publication = this.publication;
       this.router.navigate(['/publication']);
       loading.dismiss();
     }, (err) => { 
       console.log(err);
     });
   }

  public pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG | this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.croppedImagepath = 'data:image/jpg;base64,' + imageData;  
      this.publication.multimedia.push(  {base: this.croppedImagepath, ext: 'jpg'} );
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

  private async getAccessDataUser(){
    await this.nativeStorage.getItem('AccessDataUser').then(
      data => {
        this.authResponse.response.accessUserData = data;
        this.token = 'Bearer ' + this.authResponse.response.accessUserData.access_token;
      },
      error => console.error(error)
    );
  }

  public post() {
    this.authService.post(this.publication, this.token).subscribe(
      async ( Response: (any) ) => {
        //this.presentAlert( JSON.stringify(this.publication) );
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

  public getPublications () {
    this.authService.getPublications(this.token).subscribe(
      async ( Response: (any) ) => {
        console.log( Response );
      },
      ( Errors: (any) ) => {
        console.log( Errors );
      },
      () => {
        
      }
    );
  }
  

}
