import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PprofilePage } from './pprofile.page';

describe('PprofilePage', () => {
  let component: PprofilePage;
  let fixture: ComponentFixture<PprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
