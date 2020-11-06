
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LodgingComponent } from './lodging/lodging.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { LodgingPublicationComponent } from './toPost/lodging-publication/lodging-publication.component';
import { LodgingTemplateComponent } from './lodging-template/lodging-template.component';
import { ImageVideoTemplateComponent } from './image-video-template/image-video-template.component';
import { PublicationTemplateComponent } from './publication-template/publication-template.component';
import { EntertainmentTemplateComponent } from './entertainment-template/entertainment-template.component';
import { NormalPublicationComponent } from './toPost/normal-publication/normal-publication.component';
import { NormalPublicationTemplateComponent } from './normal-publication-template/normal-publication-template.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
                 LodgingComponent,
                 EntertainmentComponent,
                 LodgingTemplateComponent,
                 ImageVideoTemplateComponent,
                 PublicationTemplateComponent,
                 EntertainmentTemplateComponent,
                 LodgingPublicationComponent,
                 NormalPublicationComponent,
                 NormalPublicationTemplateComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
            LodgingComponent,
            EntertainmentComponent,
            LodgingTemplateComponent,
            ImageVideoTemplateComponent,
            PublicationTemplateComponent,
            EntertainmentTemplateComponent,
            LodgingPublicationComponent,
            NormalPublicationComponent,
            NormalPublicationTemplateComponent],
           
            entryComponents:[LodgingComponent,
              EntertainmentComponent,
              LodgingTemplateComponent,
              ImageVideoTemplateComponent,
              PublicationTemplateComponent,
              EntertainmentTemplateComponent,
              LodgingPublicationComponent,
              NormalPublicationComponent,
              NormalPublicationTemplateComponent]
})
export class ComponentsModule { }

