import { MenuAppsPage } from './../../../Pages/Social/menu-apps/menu-apps.page';
import { Component, OnInit } from '@angular/core';

import { HomePage } from 'src/app/Pages/Social/home/home.page';
import { MarketPage } from 'src/app/Pages/Social/market/market.page';
import { StoriesPage } from 'src/app/Pages/Social/stories/stories.page';
import { ChatPage } from 'src/app/Pages/Social/chat/chat.page';
import { ProfilePage } from 'src/app/Pages/Social/profile/profile.page';
import { SuperTabChangeEventDetail } from '@ionic-super-tabs/core';
import { ActivatedRoute } from '@angular/router';
import { AccessUserData } from 'src/app/Models/Classes/access-user-data';
import { Utils } from 'src/app/Models/Classes/utils';
import { LodgingPage } from 'src/app/Pages/Social/lodging/lodging.page';


@Component({
	selector: 'app-social-home',
	templateUrl: './social-home.page.html',
	styleUrls: ['./social-home.page.scss'],
})
export class SocialHomePage implements OnInit {
	homePage = HomePage;
	marketPage = MarketPage;
	storiesPage = StoriesPage;
	chatPage = ChatPage;
	profilePage = ProfilePage;
	menuAppsPage = MenuAppsPage;
	lodgingPage = LodgingPage;

	public accessdata: AccessUserData;

	constructor(
		private route: ActivatedRoute,
		private utils: Utils,
	) { }

	ngOnInit() {
		this.utils.getAccessData();
	}


	OnTabChange(ev: CustomEvent<SuperTabChangeEventDetail>) {
		switch (ev.detail.index) {
			case 0:
				//console.log("Estas en apps");
				break;
			case 1:
				//console.log("Estas en social");
				break;
			case 2:
				//console.log("Estas en profesional")
				break;
		}
	}

}
