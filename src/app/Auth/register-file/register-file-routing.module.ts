import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFilePage } from './register-file.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFilePageRoutingModule {}
