import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'social',
        children: [
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
        ]
      },
      {
        path: 'profesional',
        children: [
          {
            path: 'profile',
            loadChildren: () => import('../profesional/pprofile/pprofile.module').then( m => m.PprofilePageModule)
          },
          {
            path: 'market',
            loadChildren: () => import('../profesional/pmarket/pmarket.module').then( m => m.PmarketPageModule)
          },
          {
            path: 'chat',
            loadChildren: () => import('../profesional/pchat/pchat.module').then( m => m.PchatPageModule)
          },
          {
            path: 'home',
            loadChildren: () => import('../profesional/phome/phome.module').then( m => m.PhomePageModule)
          },
          {
            path: 'stories',
            loadChildren: () => import('../profesional/pstories/pstories.module').then( m => m.PstoriesPageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
