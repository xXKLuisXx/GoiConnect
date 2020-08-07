import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhomePage } from './phome.page';

describe('PhomePage', () => {
  let component: PhomePage;
  let fixture: ComponentFixture<PhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
