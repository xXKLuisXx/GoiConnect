import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAppsPage } from './menu-apps.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAppsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAppsPageRoutingModule {}
