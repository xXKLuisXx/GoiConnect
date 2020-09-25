import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {


  constructor( public httpClient : HttpClient ) { }

  public postPublication(publication : any) : any{

    const headers = new HttpHeaders().set("Content-Type", "application/json");
                                     //.append('Access-Control-Allow-Origin', '*')
                                     //.append('content-type','application/x-www-form-urlencoded');
    
    const url = 'http://192.168.0.15/api/publications';
    
    return  this.httpClient.post(url, publication, {headers});
  }
}