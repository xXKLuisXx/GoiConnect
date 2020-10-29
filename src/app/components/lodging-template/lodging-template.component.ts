import { Component, Input, OnInit } from '@angular/core';
import { Publication } from 'src/app/Models/Classes/publication';

@Component({
  selector: 'app-lodging-template',
  templateUrl: './lodging-template.component.html',
  styleUrls: ['./lodging-template.component.scss'],
})
export class LodgingTemplateComponent implements OnInit {

  @Input() publication: Publication;
  
  constructor() { }

  ngOnInit() {}

}
