import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FriendshipPage } from './friendship.page';

describe('FriendshipPage', () => {
  let component: FriendshipPage;
  let fixture: ComponentFixture<FriendshipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendshipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FriendshipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
