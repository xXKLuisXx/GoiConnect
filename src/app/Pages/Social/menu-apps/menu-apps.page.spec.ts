import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuAppsPage } from './menu-apps.page';

describe('MenuAppsPage', () => {
  let component: MenuAppsPage;
  let fixture: ComponentFixture<MenuAppsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAppsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuAppsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
