import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SprofilePageRoutingModule } from './sprofile-routing.module';

import { SprofilePage } from './sprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SprofilePageRoutingModule
  ],
  declarations: [SprofilePage]
})
export class SprofilePageModule {}
