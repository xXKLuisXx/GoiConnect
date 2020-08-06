import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesionalPage } from './profesional.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesionalPage
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'market',
    loadChildren: () => import('./market/market.module').then( m => m.MarketPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'stories',
    loadChildren: () => import('./stories/stories.module').then( m => m.StoriesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesionalPageRoutingModule {}
