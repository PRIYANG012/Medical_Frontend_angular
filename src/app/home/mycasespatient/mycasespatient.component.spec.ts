import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycasespatientComponent } from './mycasespatient.component';

describe('MycasespatientComponent', () => {
  let component: MycasespatientComponent;
  let fixture: ComponentFixture<MycasespatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycasespatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycasespatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
