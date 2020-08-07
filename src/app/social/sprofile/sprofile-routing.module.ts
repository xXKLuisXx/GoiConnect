import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SprofilePage } from './sprofile.page';

const routes: Routes = [
  {
    path: '',
    component: SprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SprofilePageRoutingModule {}
