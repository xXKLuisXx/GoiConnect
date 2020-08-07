import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchatPageRoutingModule } from './schat-routing.module';

import { SchatPage } from './schat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchatPageRoutingModule
  ],
  declarations: [SchatPage]
})
export class SchatPageModule {}
