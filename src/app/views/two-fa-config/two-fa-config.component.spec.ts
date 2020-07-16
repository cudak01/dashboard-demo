import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFaConfigComponent } from './two-fa-config.component';

describe('TwoFaConfigComponent', () => {
  let component: TwoFaConfigComponent;
  let fixture: ComponentFixture<TwoFaConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoFaConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoFaConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
