import { Component, OnInit } from '@angular/core';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {
  profilePage : ProfilePage;
  constructor() { }

  ngOnInit() {
  }

}
