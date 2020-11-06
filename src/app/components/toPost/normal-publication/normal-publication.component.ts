import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Publication } from 'src/app/Models/Classes/publication';

@Component({
  selector: 'app-normal-publication',
  templateUrl: './normal-publication.component.html',
  styleUrls: ['./normal-publication.component.scss'],
})
export class NormalPublicationComponent implements OnInit {

  @Input() publication: Publication;
  @Input() postPublication:boolean;
  @Output() changeP: EventEmitter<boolean> = new EventEmitter<boolean>();

  private isVideo: boolean;
  private src: string;
  private multimediaSelected: boolean;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.multimediaSelected = true;
  }

  public getImgContent():SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.src);
  }

  public changeTextArea(){

    let er = new RegExp('(\s)+');
    let res = er.test(" ");
    console.log(res);

    if(this.publication.description == " " || this.publication.description == null){
      this.postPublication = true;
      this.changeP.emit(this.postPublication);
    }
    else{
      this.postPublication = false;
      this.changeP.emit(this.postPublication);
    }
  }

}
