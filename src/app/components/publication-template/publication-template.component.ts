import { Component, OnInit, Input } from '@angular/core';
import { Publication } from 'src/app/Models/Classes/publication';

@Component({
  selector: 'app-publication-template',
  templateUrl: './publication-template.component.html',
  styleUrls: ['./publication-template.component.scss'],
})
export class PublicationTemplateComponent implements OnInit {

  private typeContent: string;

  @Input() publication: Publication;

  constructor() { }

  ngOnInit() {
    this.typeContent = this.publication.typeContent.toString();  
  }

}
