import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapaddyGlobalSettingsComponent } from './snapaddy-global-settings.component';

describe('SnapaddyGlobalSettingsComponent', () => {
  let component: SnapaddyGlobalSettingsComponent;
  let fixture: ComponentFixture<SnapaddyGlobalSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapaddyGlobalSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapaddyGlobalSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
