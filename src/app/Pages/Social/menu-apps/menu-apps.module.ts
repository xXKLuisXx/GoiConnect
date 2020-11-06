import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAppsPageRoutingModule } from './menu-apps-routing.module';

import { MenuAppsPage } from './menu-apps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAppsPageRoutingModule
  ],
  declarations: [MenuAppsPage]
})
export class MenuAppsPageModule {}
