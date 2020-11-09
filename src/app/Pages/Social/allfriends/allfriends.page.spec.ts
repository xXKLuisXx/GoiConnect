import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllfriendsPage } from './allfriends.page';

describe('AllfriendsPage', () => {
  let component: AllfriendsPage;
  let fixture: ComponentFixture<AllfriendsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllfriendsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllfriendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
