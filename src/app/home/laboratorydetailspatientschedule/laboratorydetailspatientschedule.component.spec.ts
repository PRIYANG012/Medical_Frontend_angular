import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorydetailspatientscheduleComponent } from './laboratorydetailspatientschedule.component';

describe('LaboratorydetailspatientscheduleComponent', () => {
  let component: LaboratorydetailspatientscheduleComponent;
  let fixture: ComponentFixture<LaboratorydetailspatientscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratorydetailspatientscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratorydetailspatientscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
