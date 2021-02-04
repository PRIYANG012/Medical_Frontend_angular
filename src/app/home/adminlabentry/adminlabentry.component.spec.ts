import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlabentryComponent } from './adminlabentry.component';

describe('AdminlabentryComponent', () => {
  let component: AdminlabentryComponent;
  let fixture: ComponentFixture<AdminlabentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlabentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlabentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
