import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchatPage } from './schat.page';

describe('SchatPage', () => {
  let component: SchatPage;
  let fixture: ComponentFixture<SchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
