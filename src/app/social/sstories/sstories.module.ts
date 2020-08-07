import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SstoriesPageRoutingModule } from './sstories-routing.module';

import { SstoriesPage } from './sstories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SstoriesPageRoutingModule
  ],
  declarations: [SstoriesPage]
})
export class SstoriesPageModule {}
