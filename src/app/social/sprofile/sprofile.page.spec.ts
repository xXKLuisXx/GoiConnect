import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SprofilePage } from './sprofile.page';

describe('SprofilePage', () => {
  let component: SprofilePage;
  let fixture: ComponentFixture<SprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
