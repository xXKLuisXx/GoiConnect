import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  /* VARIABLES PARA DEFINIR DIV A MOSTRAR */
  public div_loading:boolean = true;
  public div_selector:boolean = false;

  constructor( 
    private navCtrl: NavController,
    private platform: Platform,
    ) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.div_loading = !this.div_loading;
      this.div_selector = !this.div_selector;
    });
  }

  login_button(){
    this.navCtrl.navigateForward('login');
  }

  register_button(){
    this.navCtrl.navigateForward('register');
  }

}
