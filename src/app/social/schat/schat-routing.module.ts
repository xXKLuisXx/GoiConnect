import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchatPage } from './schat.page';

const routes: Routes = [
  {
    path: '',
    component: SchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchatPageRoutingModule {}
