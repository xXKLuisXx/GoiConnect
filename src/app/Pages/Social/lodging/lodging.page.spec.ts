import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LodgingPage } from './lodging.page';

describe('LodgingPage', () => {
  let component: LodgingPage;
  let fixture: ComponentFixture<LodgingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LodgingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
