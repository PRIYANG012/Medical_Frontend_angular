import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulelabdoctorComponent } from './schedulelabdoctor.component';

describe('SchedulelabdoctorComponent', () => {
  let component: SchedulelabdoctorComponent;
  let fixture: ComponentFixture<SchedulelabdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulelabdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulelabdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
