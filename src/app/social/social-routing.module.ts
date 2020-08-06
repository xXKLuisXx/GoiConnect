import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialPage } from './social.page';

const routes: Routes = [
  {
    path: '',
    component: SocialPage,
  },
  {
    path: 'home',
    loadChildren: () => import('../Social/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'market',
    loadChildren: () => import('../Social/market/market.module').then( m => m.MarketPageModule)
  },
  {
    path: 'stories',
    loadChildren: () => import('../Social/stories/stories.module').then( m => m.StoriesPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('../Social/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../Social/profile/profile.module').then( m => m.ProfilePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialPageRoutingModule {}
