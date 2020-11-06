import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgingPageRoutingModule } from './lodging-routing.module';

import { LodgingPage } from './lodging.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgingPageRoutingModule
  ],
  declarations: [LodgingPage]
})
export class LodgingPageModule {}
