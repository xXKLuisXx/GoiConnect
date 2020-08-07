import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PmarketPage } from './pmarket.page';

describe('PmarketPage', () => {
  let component: PmarketPage;
  let fixture: ComponentFixture<PmarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmarketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PmarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
