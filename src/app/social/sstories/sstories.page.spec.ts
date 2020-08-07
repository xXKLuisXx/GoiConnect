import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SstoriesPage } from './sstories.page';

describe('SstoriesPage', () => {
  let component: SstoriesPage;
  let fixture: ComponentFixture<SstoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SstoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SstoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
