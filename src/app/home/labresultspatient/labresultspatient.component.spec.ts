import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabresultspatientComponent } from './labresultspatient.component';

describe('LabresultspatientComponent', () => {
  let component: LabresultspatientComponent;
  let fixture: ComponentFixture<LabresultspatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabresultspatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabresultspatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
