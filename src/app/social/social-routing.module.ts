import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialPage } from './social.page';

const routes: Routes = [
  {
    path: '',
    component: SocialPage,
  },
  /*
  {
    path: 'home',
    loadChildren: () => import('../social/shome/shome.module').then( m => m.ShomePageModule)
  },
  {
    path: 'market',
    loadChildren: () => import('../social/smarket/smarket.module').then( m => m.SmarketPageModule)
  },
  {
    path: 'stories',
    loadChildren: () => import('../social/sstories/sstories.module').then( m => m.SstoriesPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('../social/schat/schat.module').then( m => m.SchatPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../social/sprofile/sprofile.module').then( m => m.SprofilePageModule)
  }
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialPageRoutingModule {}
