import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesionalPage } from './profesional.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesionalPage
  },
  /*
  {
    path: 'profile',
    loadChildren: () => import('./pprofile/pprofile.module').then( m => m.PprofilePageModule)
  },
  {
    path: 'market',
    loadChildren: () => import('./pmarket/pmarket.module').then( m => m.PmarketPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pchat/pchat.module').then( m => m.PchatPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./phome/phome.module').then( m => m.PhomePageModule)
  },
  {
    path: 'stories',
    loadChildren: () => import('./pstories/pstories.module').then( m => m.PstoriesPageModule)
  }
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesionalPageRoutingModule {}
