import { TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Utils } from './utils';

describe('Utils', () => {
  let utils: Utils;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ Utils ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    TestBed.configureTestingModule({});
    utils = TestBed.inject(Utils);
  });

  it('should create an instance', () => {
    expect(utils).toBeTruthy();
  });
});
