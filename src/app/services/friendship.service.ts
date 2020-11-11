import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Relation } from '../Models/Classes/relation';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../services/request.service';
import { RequestResponse } from '../Models/Classes/request-response';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendshipService {

  public friends: Relation = new Relation();

  constructor(public httpClient: HttpClient, private request: RequestService) { }


  public async getUsers(): Promise<Observable<RequestResponse>> {
    return new Promise((resolve, reject) => {
      this.request.createRequestGet('friends', { key : 'vale' } ).then((client) => {
        console.log('friends');
        resolve(client);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  public async getFriends(): Promise<Observable<RequestResponse>> {
    return new Promise((resolve, reject) => {
      this.request.createRequestGet('allfriends', { key : 'vale' } ).then((client) => {
        console.log('allfriends');
        resolve(client);
      }).catch((error) => {
        reject(error);
      });
    });
  }


  public async addFriend(relation: Relation): Promise<Observable<RequestResponse>> {
    return new Promise((resolve, reject) => {
      this.request.createRequestPost('add', relation).then((client) => {
        resolve(client);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  public async userFollow(relation: Relation): Promise<Observable<RequestResponse>> {
    return new Promise((resolve, reject) => {
      this.request.createRequestPost('userFollow', relation).then((client) => {
        resolve(client);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  public friendSuper(relation: Relation): Promise<Observable<RequestResponse>> {
    return new Promise((resolve, reject) => {
      this.request.createRequestPost('addFriendSuper', relation).then((client) => {
        resolve(client);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  public blockNotFriend(relation: Relation): Promise<Observable<RequestResponse>> {
    return new Promise((resolve, reject) => {
      this.request.createRequestPost('blockNotFriend', relation).then((client) => {
        resolve(client);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  public async listRequestFriend(): Promise<Observable<RequestResponse>> {
    return new Promise((resolve, reject) => {
      this.request.createRequestGet('listrequest', { key: 'vale' } ).then((client) => {
        console.log('listrequest');
        resolve(client);
      }).catch((error) => {
        reject(error);
      });
    });
  }


  public async acceptFriend(relation: Relation): Promise<Observable<RequestResponse>> {
    return new Promise((resolve, reject) => {
      this.request.createRequestUpdate('acceptFriend', relation).then((client) => {
        resolve(client);
      }).catch((error) => {
        reject(error);
      });
    });
  }

}
