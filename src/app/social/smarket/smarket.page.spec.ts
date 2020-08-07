import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmarketPage } from './smarket.page';

describe('SmarketPage', () => {
  let component: SmarketPage;
  let fixture: ComponentFixture<SmarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmarketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
