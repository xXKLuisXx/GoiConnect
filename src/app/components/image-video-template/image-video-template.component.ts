import { Component, Input, OnInit } from '@angular/core';
import { Publication } from 'src/app/Models/Classes/publication';

@Component({
  selector: 'app-image-video-template',
  templateUrl: './image-video-template.component.html',
  styleUrls: ['./image-video-template.component.scss'],
})
export class ImageVideoTemplateComponent implements OnInit {

  @Input() publication: Publication;
  
  constructor() { }

  ngOnInit() {
  }

  public isVideo(multimedia) {
		let extension = multimedia.substr(13);
		if (extension == 'mp4') return true;
		else return false;
	}

}
