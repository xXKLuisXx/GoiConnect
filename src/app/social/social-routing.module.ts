import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialPage } from './social.page';

const routes: Routes = [
  {
    path: '',
    component: SocialPage,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialPageRoutingModule {}
