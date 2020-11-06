import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-detail',
  templateUrl: './lodging-detail.page.html',
  styleUrls: ['./lodging-detail.page.scss'],
})
export class LodgingDetailPage implements OnInit {

  private images = [1,2,3,4,5];
  constructor() { }

  ngOnInit() {
  }

}
