import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LodgingDetailPageRoutingModule } from './lodging-detail-routing.module';

import { LodgingDetailPage } from './lodging-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LodgingDetailPageRoutingModule
  ],
  declarations: [LodgingDetailPage]
})
export class LodgingDetailPageModule {}
