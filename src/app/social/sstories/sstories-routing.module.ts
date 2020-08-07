import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SstoriesPage } from './sstories.page';

const routes: Routes = [
  {
    path: '',
    component: SstoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SstoriesPageRoutingModule {}
