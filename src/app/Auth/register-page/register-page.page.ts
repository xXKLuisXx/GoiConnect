import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { User } from  '../user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {

  constructor(
    private router : Router,
    public loadingController : LoadingController,
    public alertController : AlertController,
    public authService : AuthService,
    private nativeStorage: NativeStorage
  ) { }
  //UserData : User
  
  ngOnInit(){

  }
  UserData: User = {
    name : "",
    email : "",
    password : "",
    password_confirmation : ""
  }

  async presentAlertConfirm(messageAlert) {
    const alert = await this.alertController.create({
      header: 'Errors',
      message: messageAlert,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentLoading(loading) {
    await loading.present();
  }

  async registerForm() {
    // Cuando se manda el formulario se crea un loading
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });
    console.log(this.UserData.name);
    // fin creacion loading 

    // Se ejecuta el loading 
    //await this.presentLoading(loading);

    console.log(this.UserData);
    let json = this.UserData;


    this.authService.register(json).subscribe(
      async ( Response ) => { 
        await this.nativeStorage.setItem('AccessDataUser', this.UserData ).then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
        
        console.log("Exito");
        console.log(Response);
      },
      ( Errors ) => {
        console.log("Hubo un problema")
        console.log(Errors);
      },
      () => {
        console.log("Termino")
      } 
    );
    /*
    console.log(this.UserData.name);

    //console.log(this.UserData.name);
    //const headers = new HttpHeaders().set("Content-Type", "application/json");
    
    
    let json = this.UserData;

    */

    /*
    this.httpClient.post("http://192.168.108.1:8000/api/register", json, {headers}).subscribe(
      val => {
        console.log("Post call successful value returned in body", val);
        this.router.navigate(['/home']);
      },
      response => {
        loading.dismiss();
        //console.log(response["message"]);
        var ErrorsHTML = "<strong>Errors: </strong>";
        if(response['error'].name != null){
          ErrorsHTML = ErrorsHTML + "<li>"+ response['error'].name +"</li>";
        }
        if(response['error'].email != null){
          ErrorsHTML = ErrorsHTML + "<li>"+ response['error'].email +"</li>";
        }
        if(response['error'].password != null){
          ErrorsHTML = ErrorsHTML + "<li>"+ response['error'].password +"</li>";
        }
        if(response['error'].password_confirmation != null){
          ErrorsHTML = ErrorsHTML + "<li>"+ response['error'].password_confirmation +"</li>";
        }
        if(response['error'].error == "invalid_grant"){
          ErrorsHTML = ErrorsHTML + "<li>"+ response['error'].message +"</li>";
        }
        ErrorsHTML = ErrorsHTML + "<br>" + "<strong> Error Request: </strong>" + response['statusText'];
        this.presentAlertConfirm(ErrorsHTML);
      },
      () => {
        loading.dismiss();

        console.log("The Post observable is now completed.");
      }
    );
    */
  }

  public LoginPage(){
    this.router.navigate(['/login-page']);
  }
}
