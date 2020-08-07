import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PmarketPage } from './pmarket.page';

const routes: Routes = [
  {
    path: '',
    component: PmarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmarketPageRoutingModule {}
