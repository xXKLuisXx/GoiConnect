import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialHomePage } from './social-home.page';

const routes: Routes = [
  {
    path: '',
    component: SocialHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialHomePageRoutingModule {}
