import { Component, OnInit, Input } from '@angular/core';
import { Publication } from 'src/app/Models/Classes/publication';

@Component({
  selector: 'app-lodging-view',
  templateUrl: './lodging-view.component.html',
  styleUrls: ['./lodging-view.component.scss'],
})
export class LodgingViewComponent implements OnInit {

  @Input() publication: Publication;

  constructor() { }

  ngOnInit() {}

}
