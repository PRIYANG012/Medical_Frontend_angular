import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorydetailsdoctorscheduleComponent } from './laboratorydetailsdoctorschedule.component';

describe('LaboratorydetailsdoctorscheduleComponent', () => {
  let component: LaboratorydetailsdoctorscheduleComponent;
  let fixture: ComponentFixture<LaboratorydetailsdoctorscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratorydetailsdoctorscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratorydetailsdoctorscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
