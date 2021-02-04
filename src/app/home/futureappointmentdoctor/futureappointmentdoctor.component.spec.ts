import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureappointmentdoctorComponent } from './futureappointmentdoctor.component';

describe('FutureappointmentdoctorComponent', () => {
  let component: FutureappointmentdoctorComponent;
  let fixture: ComponentFixture<FutureappointmentdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureappointmentdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureappointmentdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
