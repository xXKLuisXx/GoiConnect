import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllfriendsPageRoutingModule } from './allfriends-routing.module';

import { AllfriendsPage } from './allfriends.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllfriendsPageRoutingModule
  ],
  declarations: [AllfriendsPage]
})
export class AllfriendsPageModule {}
