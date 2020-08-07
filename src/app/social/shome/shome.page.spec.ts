import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShomePage } from './shome.page';

describe('ShomePage', () => {
  let component: ShomePage;
  let fixture: ComponentFixture<ShomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
