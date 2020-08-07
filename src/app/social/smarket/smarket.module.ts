import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmarketPageRoutingModule } from './smarket-routing.module';

import { SmarketPage } from './smarket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmarketPageRoutingModule
  ],
  declarations: [SmarketPage]
})
export class SmarketPageModule {}
