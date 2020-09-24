import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterFilePage } from './register-file.page';

describe('RegisterFilePage', () => {
  let component: RegisterFilePage;
  let fixture: ComponentFixture<RegisterFilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
