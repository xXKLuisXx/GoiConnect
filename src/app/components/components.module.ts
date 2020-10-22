import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LodgingComponent } from './lodging/lodging.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { LodgingTemplateComponent } from './lodging-template/lodging-template.component';
import { ImageVideoTemplateComponent } from './image-video-template/image-video-template.component';
import { PublicationTemplateComponent } from './publication-template/publication-template.component';
import { EntertainmentTemplateComponent } from './entertainment-template/entertainment-template.component';

@NgModule({
  declarations: [
                 LodgingComponent,
                 EntertainmentComponent,
                 LodgingTemplateComponent,
                 ImageVideoTemplateComponent,
                 PublicationTemplateComponent,
                 EntertainmentTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [
            LodgingComponent,
            EntertainmentComponent,
            LodgingTemplateComponent,
            ImageVideoTemplateComponent,
            PublicationTemplateComponent,
            EntertainmentTemplateComponent],
})
export class ComponentsModule { }

