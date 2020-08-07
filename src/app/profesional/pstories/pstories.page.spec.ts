import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PstoriesPage } from './pstories.page';

describe('PstoriesPage', () => {
  let component: PstoriesPage;
  let fixture: ComponentFixture<PstoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PstoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PstoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
