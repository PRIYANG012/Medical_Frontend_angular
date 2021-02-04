import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabresultsdoctorComponent } from './labresultsdoctor.component';

describe('LabresultsdoctorComponent', () => {
  let component: LabresultsdoctorComponent;
  let fixture: ComponentFixture<LabresultsdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabresultsdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabresultsdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
