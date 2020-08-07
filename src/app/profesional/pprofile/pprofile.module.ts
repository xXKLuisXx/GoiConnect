import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PprofilePageRoutingModule } from './pprofile-routing.module';

import { PprofilePage } from './pprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PprofilePageRoutingModule
  ],
  declarations: [PprofilePage]
})
export class PprofilePageModule {}
