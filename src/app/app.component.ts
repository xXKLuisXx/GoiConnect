import { Component } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public actionSheetController: ActionSheetController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goToLodging(){
    this.router.navigate(['social/lodging']);
  }

  async goTo() {
		const actionSheet = await this.actionSheetController.create({
			header: "Select",
			buttons: [{
				text: 'Mis Hospedajes',
				handler: () => {
					this.router.navigate(['social/lodging']);
				}
			},
			{
				text: 'Mis Eventos',
				handler: () => {
				}
      },
      {
        text: 'Amigos',
        handler: () => {
          this.router.navigate(['social/friends']);
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
