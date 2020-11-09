import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Relation } from '../../../Models/Classes/relation';
import { User } from '../../../Models/Classes/user';
import { FriendshipService } from '../../../services/friendship.service';
import { Utils } from 'src/app/Models/Classes/utils';
import { AccessUserData } from 'src/app/Models/Classes/access-user-data';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Route } from '@angular/compiler/src/core';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-allfriends',
  templateUrl: './allfriends.page.html',
  styleUrls: ['./allfriends.page.scss'],
})
export class AllfriendsPage implements OnInit {


  public friends: Relation;
  private utils: Utils;
  private accessdata: AccessUserData;
  public searchTerm: string = "";
  public allFriends: any;

  constructor(private router: Router, private route: ActivatedRoute,
    public friendshipService: FriendshipService,
    private sanitizer: DomSanitizer) { this.friends = new Relation(); }

  ngOnInit() {
  }

  public fetchFriends() {
    this.friendshipService.getFriends().then((subscriber) => {
        subscriber.subscribe(
          async (Response: (any)) => {
            console.log(Response);
            this.allFriends = Response.allFriends;
            console.log(this.allFriends);
          }, err => {
            console.log(err);
          });

    });
  }

}
