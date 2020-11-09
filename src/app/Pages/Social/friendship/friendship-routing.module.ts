import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendshipPage } from './friendship.page';

const routes: Routes = [
  {
    path: '',
    component: FriendshipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendshipPageRoutingModule {}
