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
import { FriendOptionsModalComponent } from '../friend-options-modal/friend-options-modal.component';

@Component({
  selector: 'app-friendship',
  templateUrl: './friendship.page.html',
  styleUrls: ['./friendship.page.scss'],
})
export class FriendshipPage implements OnInit {

  public friends: Relation;
  private utils: Utils;
  private accessdata: AccessUserData;
  public searchTerm: string = "";
  public users: any;
  // tslint:disable-next-line: variable-name
  public pending_request: any;
  usuarioSeleccionado: User;

  constructor(private router: Router, private route: ActivatedRoute,
              public friendshipService: FriendshipService,
              private sanitizer: DomSanitizer,
              private modalCtrl: ModalController,
              public actionSheetController: ActionSheetController) {this.friends = new Relation(); }

  async ngOnInit() {
    this.fetchUsers();
    this.listRequestFriend();
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

  // tslint:disable-next-line: variable-name
  public addFriend(user_id){

    const request = new Relation({
      user_friendship_id: user_id,
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

    console.log(user_id);
  }

  public userFollower(person_id){
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


  public async unblock(person_id){
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

  /** list Request Friend
   *
   */
  public listRequestFriend() {
    this.friendshipService.getRequestFriend().then((subscriber) => {
        subscriber.subscribe(
          async (Response: (any)) => {
            console.log(Response);
            this.pending_request = Response.pending_request;
          }, err => {
            console.log(err);
          });
    });
  }

  /** accept request Friend
   *
   */
  public async acceptFriend(person_id){
    const request = new Relation({
      user_friendship_id: person_id,
      profile_id: 1,
      friendship_id: 2
    });

    this.friendshipService.acceptFriend(request).then((subscriber) => {
      subscriber.subscribe(
        async (Response: (any)) => {
          console.log(Response);
        }, (error) => {
          console.log(error);
        });
    });

    console.log(person_id);
  }


  async openModal(){
    const modal = await this.modalCtrl.create({
      component : FriendOptionsModalComponent,
      cssClass: 'myModal'
    });

    await modal.present();
  }


  async presentActionSheet(User) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Agregar a amigos',
        icon: 'person-add',
        handler: () => {
          this.addFriend(User.id);
          console.log('add friends clicke');
        }
      }, {
        text: 'Agregar a super amigos',
        icon: 'heart',
        handler: () => {
          this.friendSuper(User.id);
          console.log('add super friend clicked');
        }
      }, {
        text: 'Seguir',
        icon: 'add-circle',
        handler: () => {
          this.userFollower(User.id);
          console.log('follow clicked');
        }
      }, {
        text: 'Bloquear',
        icon: 'lock-closed',
        handler: () => {
          this.block(User.id);
          console.log('lock user clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
