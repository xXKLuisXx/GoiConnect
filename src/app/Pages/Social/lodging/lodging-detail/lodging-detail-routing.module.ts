import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LodgingDetailPage } from './lodging-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LodgingDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LodgingDetailPageRoutingModule {}
