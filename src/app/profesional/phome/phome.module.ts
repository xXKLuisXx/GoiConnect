import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhomePageRoutingModule } from './phome-routing.module';

import { PhomePage } from './phome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhomePageRoutingModule
  ],
  declarations: [PhomePage]
})
export class PhomePageModule {}
