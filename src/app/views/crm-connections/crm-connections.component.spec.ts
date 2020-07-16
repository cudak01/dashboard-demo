import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmConnectionsComponent } from './crm-connections.component';

describe('CrmSettingsComponent', () => {
  let component: CrmConnectionsComponent;
  let fixture: ComponentFixture<CrmConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
