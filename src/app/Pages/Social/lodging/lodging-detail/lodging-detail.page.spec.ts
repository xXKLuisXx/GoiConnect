import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LodgingDetailPage } from './lodging-detail.page';

describe('LodgingDetailPage', () => {
  let component: LodgingDetailPage;
  let fixture: ComponentFixture<LodgingDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgingDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LodgingDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
