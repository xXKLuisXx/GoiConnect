import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LodgingComponent } from './lodging/lodging.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { LodgingViewComponent } from './lodging-view/lodging-view.component';


@NgModule({
  declarations: [LodgingComponent,
                 LodgingViewComponent,
                 EntertainmentComponent],
  imports: [
    CommonModule
  ],
  exports: [LodgingComponent,
            LodgingViewComponent,
            EntertainmentComponent],
})
export class ComponentsModule { }
