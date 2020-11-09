import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllfriendsPage } from './allfriends.page';

const routes: Routes = [
  {
    path: '',
    component: AllfriendsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllfriendsPageRoutingModule {}
