import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaselistdoctorComponent } from './caselistdoctor.component';

describe('CaselistdoctorComponent', () => {
  let component: CaselistdoctorComponent;
  let fixture: ComponentFixture<CaselistdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaselistdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaselistdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
