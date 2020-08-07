import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PchatPage } from './pchat.page';

describe('PchatPage', () => {
  let component: PchatPage;
  let fixture: ComponentFixture<PchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
