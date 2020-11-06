import { Component, Input, OnInit } from '@angular/core';
import { Publication } from 'src/app/Models/Classes/publication';

@Component({
  selector: 'app-lodging-publication',
  templateUrl: './lodging-publication.component.html',
  styleUrls: ['./lodging-publication.component.scss'],
})
export class LodgingPublicationComponent implements OnInit {

  @Input() publication: Publication;

  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
