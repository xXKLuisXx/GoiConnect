import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
})
export class StoriesPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    direction: 'vertical',
    effect: 'cube',
    loop: 'true',
    pagination: {
      el: null,
    },
  };

  constructor() { }

  ngOnInit() {
    
  }

}
