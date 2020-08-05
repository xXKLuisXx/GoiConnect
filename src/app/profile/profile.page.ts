import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonNav } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public nav: IonNav, public navParams : NavParams) { }
  
  ngOnInit() {
    console.log("entra 1");
  }

  ionViewDidLoad() {
    console.log("entra 2");
  }
  
  ionViewWillEnter(){
    console.log("entra 3");
  }//	void	Runs when the page is about to enter and become the active page.
  ionViewDidEnter(){
    console.log("entra 4");
  }	//void	Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.
  ionViewWillLeave() {
    console.log("entra 5");
  } //	void	Runs when the page is about to leave and no longer be the active page.
  ionViewDidLeave() {
    console.log("entra 6");
  }	//void	Runs when the page has finished leaving and is no longer the active page.
  ionViewWillUnload() {
    console.log("entra 7");
  }	//void	Runs when the page is about to be destroyed and have its elements removed.
  ionViewCanEnter(){
    console.log("entra 8");
  }//	boolean/Promise<void>	Runs before the view can enter. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can enter
  ionViewCanLeave(){
    console.log("entra 9");
  }
}
