import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NormalPublicationTemplateComponent } from './normal-publication-template.component';

describe('NormalPublicationTemplateComponent', () => {
  let component: NormalPublicationTemplateComponent;
  let fixture: ComponentFixture<NormalPublicationTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalPublicationTemplateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NormalPublicationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
