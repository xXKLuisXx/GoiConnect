import { Component, Input, OnInit } from '@angular/core';
import { Publication } from 'src/app/Models/Classes/publication';

@Component({
  selector: 'app-normal-publication-template',
  templateUrl: './normal-publication-template.component.html',
  styleUrls: ['./normal-publication-template.component.scss'],
})
export class NormalPublicationTemplateComponent implements OnInit {

  @Input() publication:Publication;
  constructor() { }

  ngOnInit() {}

}
