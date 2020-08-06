import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../social/home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'market',
        children: [
          {
            path: '',
            loadChildren: () => import('../social/market/market.module').then( m => m.MarketPageModule)
          }
        ]
      },
      {
        path: 'stories',
        children: [
          {
            path: '',
            loadChildren: () => import('../social/stories/stories.module').then( m => m.StoriesPageModule)
          }
        ]
      },
      {
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: () => import('../social/chat/chat.module').then( m => m.ChatPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../social/profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'profile1',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
