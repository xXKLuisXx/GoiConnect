import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShomePageRoutingModule } from './shome-routing.module';

import { ShomePage } from './shome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShomePageRoutingModule
  ],
  declarations: [ShomePage]
})
export class ShomePageModule {}
