import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PprofilePage } from './pprofile.page';

const routes: Routes = [
  {
    path: '',
    component: PprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PprofilePageRoutingModule {}
