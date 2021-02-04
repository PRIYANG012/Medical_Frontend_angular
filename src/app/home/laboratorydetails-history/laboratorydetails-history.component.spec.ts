import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorydetailsHistoryComponent } from './laboratorydetails-history.component';

describe('LaboratorydetailsHistoryComponent', () => {
  let component: LaboratorydetailsHistoryComponent;
  let fixture: ComponentFixture<LaboratorydetailsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratorydetailsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratorydetailsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
