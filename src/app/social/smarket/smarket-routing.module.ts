import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmarketPage } from './smarket.page';

const routes: Routes = [
  {
    path: '',
    component: SmarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmarketPageRoutingModule {}
