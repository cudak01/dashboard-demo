import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationInformationComponent } from './organisation-information.component';

describe('OrganisationInformationComponent', () => {
  let component: OrganisationInformationComponent;
  let fixture: ComponentFixture<OrganisationInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
