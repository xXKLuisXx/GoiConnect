import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Publication } from 'src/app/Models/Classes/publication';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.scss'],
})
export class LodgingComponent implements OnInit {
  
  @Input() publication: Publication;

  constructor() { }

  ngOnInit() {
  }

  

  

}
