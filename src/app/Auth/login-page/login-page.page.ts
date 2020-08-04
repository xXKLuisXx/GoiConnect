import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(
    private router : Router,
    private nativeStorage : NativeStorage,
    public httpClient : HttpClient,
    public loadingController : LoadingController,
    public alertController : AlertController
    ) { }

  UserData = { }

  ngOnInit(){
    this.nativeStorage.getItem('AccessDataUser').then(
      data => console.log(data),
      error => console.error(error)
    );
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

  async loginForm() {
    // Cuando se manda el formulario se crea un loading
    //console.log(this.UserData);
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });
    // fin creacion loading 

    // Se ejecuta el loading 
    await this.presentLoading(loading);

    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let json = this.UserData;
    this.httpClient.post("http://192.168.108.1:8000/api/login", json, {headers}).subscribe(
      val => {
        console.log("Post call successful value returned in body", val);
        this.router.navigate(['/home']);
      },
      response => {
        loading.dismiss();
        //console.log(response["message"]);
        var ErrorsHTML = "<strong>Errors: </strong>";
        if(response['error'].email != null){
          ErrorsHTML = ErrorsHTML + "<li>"+ response['error'].email +"</li>";
        }
        if(response['error'].password != null){
          ErrorsHTML = ErrorsHTML + "<li>"+ response['error'].password +"</li>";
        }
        if(response['error'].error == "invalid_grant"){
          ErrorsHTML = ErrorsHTML + "<li>"+ response['error'].message +"</li>";
        }
        ErrorsHTML = ErrorsHTML + "<br>" + "<strong> Error Request: </strong>" + response['statusText'];
        this.presentAlertConfirm(ErrorsHTML);

        //console.log("Errors: ", response['error']);
        //console.log("Mesagge: ", response['statusText']);
        //console.log("Post call in error", response);
      },
      () => {
        loading.dismiss();

        console.log("The Post observable is now completed.");
      }
    );
  }

  public RegisterPage(){
    this.router.navigate(['/register-page']);
  }

}
