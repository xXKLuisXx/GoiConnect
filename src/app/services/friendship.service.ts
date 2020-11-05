import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Relation } from '../Models/Classes/relation';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../services/request.service';
import { RequestResponse } from '../Models/Classes/request-response';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendshipService {

  authSubject  =  new  BehaviorSubject(false);
  private tokenRequired: boolean;
  public friends: Relation = new Relation();
  public users: any = [];

  constructor(public httpClient: HttpClient, private request: RequestService) {
      this.tokenRequired = true;
  }

  postFriendship(friends: Relation, authorization?: string): Observable<RequestResponse> {
    return this.request.createRequest(friends, 'friends', this.tokenRequired, authorization);
  }

  getUsers(authorization: string): Observable<any> { // Mientras tanto buscas la solucion
    return this.request.createRequestGet('friends', this.tokenRequired, authorization);
  }

   
  addFriend(relation: Relation, authorization?: string): Observable<any> {
    return this.request.createRequest(relation, 'add', this.tokenRequired, authorization);
  }

  // filter users
  filterItems(searchTerm) {
    return this.users.filter(user => {
      return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
