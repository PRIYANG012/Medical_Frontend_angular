import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesttestpatientComponent } from './requesttestpatient.component';

describe('RequesttestpatientComponent', () => {
  let component: RequesttestpatientComponent;
  let fixture: ComponentFixture<RequesttestpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequesttestpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequesttestpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
