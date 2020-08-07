import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PstoriesPage } from './pstories.page';

const routes: Routes = [
  {
    path: '',
    component: PstoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PstoriesPageRoutingModule {}
