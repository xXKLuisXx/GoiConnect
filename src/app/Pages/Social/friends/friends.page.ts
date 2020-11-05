import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { Relation } from '../../../Models/Classes/relation';
import { FriendshipService } from '../../../services/friendship.service';
import { Utils } from 'src/app/Models/Classes/utils';
import { AccessUserData } from 'src/app/Models/Classes/access-user-data';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { User } from '../../../Models/Classes/user';
import { RequestResponse } from '../../../Models/Classes/request-response';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  public friends: Relation;
  private utils: Utils;
  private accessdata: AccessUserData;
  public searchTerm: string = "";
  public users: any;

  constructor(private router: Router, private route: ActivatedRoute,
              public friendshipService: FriendshipService,
              private sanitizer: DomSanitizer
  ) { this.utils = new Utils();
      this.friends = new Relation();
  }

  ngOnInit() {
    // this.setFilteredItems();

    this.fetchUsers();
  }

  get userToken(): string{
    return this.utils.accessUserData.getAuthorization();
  }

  setFilteredItems() {
    // this.users = this.friendshipService.filterItems(this.searchTerm);
  }

  public fetchUsers() {

    this.utils.createAlert('Subscribe', this.utils.accessUserData.getAuthorization(), 'Mmm').then();

     this.friendshipService.getUsers(this.utils.accessUserData.getAuthorization())
      .subscribe((res: any) => {
        
        this.utils.createAlert('Subscribe', 'Solicitud enviada...', 'Mmm').then();
        this.users = res.users;
        console.log(this.users);
      }, err => {
        this.utils.createAlert('Error', 'Solicitud no enviada...', 'Mmm').then();
        console.log(err);
      });
  }



  public addFriend(person_id){

    const request = new Relation({
      user_friendship_id: person_id,
      profile_id: 1,
      friendship_id: 1
    })


    this.friendshipService.addFriend(request, this.utils.accessUserData.getAuthorization()).
    subscribe((response: any) => {
      console.log(response);

      this.utils.createAlert('Aviso', 'Solicitud enviada', 'Mmm').then();

    }, (error) => {
      console.log(error);

      this.utils.createAlert('Aviso', 'No se pudo enviar la solicitud', 'Mmm').then();

    });

    console.log(person_id)
  }


}
