import { Component, ViewChild } from '@angular/core';
import { NavController, IonNav } from '@ionic/angular';
import { ProfilePage } from '../profile/profile.page';
import { SuperTabChangeEventDetail } from '@ionic-super-tabs/core';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { SocialPage } from '../social/social.page';
import { ProfesionalPage } from '../profesional/profesional.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profilePage = ProfilePage;
  socialPage = SocialPage;
  professionalPage = ProfesionalPage;
  @ViewChild('newsNav', {static: false}) newsNav: IonNav;

  constructor(public NavCtrl:NavController) { }
  OnTabChange(ev: CustomEvent<SuperTabChangeEventDetail>){
    switch(ev.detail.index){
      case 0:
        console.log("Estas en apps");
        break;
      case 1:
        console.log("Estas en social");
        break;
      case 2:
        console.log("Estas en profesional")
        break;
    }
  }
}
