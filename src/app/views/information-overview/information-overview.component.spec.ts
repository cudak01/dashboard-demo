import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationOverviewComponent } from './information-overview.component';

describe('InformationOverviewComponent', () => {
  let component: InformationOverviewComponent;
  let fixture: ComponentFixture<InformationOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
