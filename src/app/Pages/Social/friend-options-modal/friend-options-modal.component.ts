import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Relation } from '../../../Models/Classes/relation';
import { FriendshipService } from '../../../services/friendship.service';
import { Utils } from 'src/app/Models/Classes/utils';
import { AccessUserData } from 'src/app/Models/Classes/access-user-data';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-friend-options-modal',
  templateUrl: './friend-options-modal.component.html',
  styleUrls: ['./friend-options-modal.component.scss'],
})
export class FriendOptionsModalComponent implements OnInit {

  public friends: Relation;
  private utils: Utils;
  private accessdata: AccessUserData;
  public searchTerm: string = "";
  public users: any;

  constructor(private modalCtrl: ModalController,
              private router: Router, private route: ActivatedRoute,
              public friendshipService: FriendshipService,
              private sanitizer: DomSanitizer) {this.friends = new Relation();}

  ngOnInit() {
    this.fetchUsers();
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }


  public fetchUsers() {
    this.friendshipService.getUsers().then((subscriber) => {
        subscriber.subscribe(
          async (Response: (any)) => {
            this.users = Response.users;
            console.log(this.users);
          }, err => {
            console.log(err);
          });

    });
  }

  public addFriend(person_id){

    const request = new Relation({
      user_friendship_id: person_id,
      profile_id: 1,
      friendship_id: 2
    });

    this.friendshipService.addFriend(request).then((subscriber) => {
      subscriber.subscribe(
        async (Response: (any)) => {
          console.log(Response);
        }, (error) => {
          console.log(error);
        });
    });

    console.log(person_id);
  }

  public async userFollow(person_id){
    const request = new Relation({
      user_friendship_id: person_id,
      profile_id: 1,
      friendship_id: 1
    });

    this.friendshipService.userFollow(request).then((subscriber) => {
      subscriber.subscribe(
        async (Response: (any)) => {
          console.log(Response);
        }, (error) => {
          console.log(error);
        });
    });

    console.log(person_id);
  }


  public async friendSuper(person_id){
    const request = new Relation({
      user_friendship_id: person_id,
      profile_id: 1,
      friendship_id: 3
    });

    this.friendshipService.friendSuper(request).then((subscriber) => {
      subscriber.subscribe(
        async (Response: (any)) => {
          console.log(Response);
        }, (error) => {
          console.log(error);
        });
    });

    console.log(person_id);
  }

  public async block(person_id){
    const request = new Relation({
      user_friendship_id: person_id,
      profile_id: 1,
      friendship_id: 4
    });

    this.friendshipService.blockNotFriend(request).then((subscriber) => {
      subscriber.subscribe(
        async (Response: (any)) => {
          console.log(Response);
        }, (error) => {
          console.log(error);
        });
    });

    console.log(person_id);

  }
}
