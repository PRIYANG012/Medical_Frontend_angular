import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindoctorentryComponent } from './admindoctorentry.component';

describe('AdmindoctorentryComponent', () => {
  let component: AdmindoctorentryComponent;
  let fixture: ComponentFixture<AdmindoctorentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindoctorentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindoctorentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
