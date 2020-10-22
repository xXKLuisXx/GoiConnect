import { Component, Input, OnInit } from '@angular/core';
import { Publication } from 'src/app/Models/Classes/publication';

@Component({
  selector: 'app-entertainment-template',
  templateUrl: './entertainment-template.component.html',
  styleUrls: ['./entertainment-template.component.scss'],
})
export class EntertainmentTemplateComponent implements OnInit {

  @Input() publication: Publication;
  constructor() { }

  ngOnInit() {
    /*let checkIn: Date = new Date(this.publication.checkIn);
    let checkOut: Date = new Date(this.publication.checkOut);
    
    console.log(checkIn + ' ' + checkOut);*/
  }

}
