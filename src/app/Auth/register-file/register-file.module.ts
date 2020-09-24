import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterFilePageRoutingModule } from './register-file-routing.module';

import { RegisterFilePage } from './register-file.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFilePageRoutingModule
  ],
  declarations: [RegisterFilePage]
})
export class RegisterFilePageModule {}
