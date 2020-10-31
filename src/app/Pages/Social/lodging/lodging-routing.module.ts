import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LodgingPage } from './lodging.page';

const routes: Routes = [
  {
    path: '',
    component: LodgingPage
  },  {
    path: 'lodging-detail',
    loadChildren: () => import('../../../Pages/Social/lodging/lodging-detail/lodging-detail.module').then( m => m.LodgingDetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LodgingPageRoutingModule {}
