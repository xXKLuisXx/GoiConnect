import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PstoriesPageRoutingModule } from './pstories-routing.module';

import { PstoriesPage } from './pstories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PstoriesPageRoutingModule
  ],
  declarations: [PstoriesPage]
})
export class PstoriesPageModule {}
