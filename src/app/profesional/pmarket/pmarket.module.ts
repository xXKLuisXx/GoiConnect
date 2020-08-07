import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PmarketPageRoutingModule } from './pmarket-routing.module';

import { PmarketPage } from './pmarket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PmarketPageRoutingModule
  ],
  declarations: [PmarketPage]
})
export class PmarketPageModule {}
