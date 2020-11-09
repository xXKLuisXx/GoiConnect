import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendshipPageRoutingModule } from './friendship-routing.module';

import { FriendshipPage } from './friendship.page';
import { FriendOptionsModalComponent } from '../friend-options-modal/friend-options-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendshipPageRoutingModule
  ],
  declarations: [FriendshipPage, FriendOptionsModalComponent],
  entryComponents: [FriendOptionsModalComponent]
})
export class FriendshipPageModule {}
