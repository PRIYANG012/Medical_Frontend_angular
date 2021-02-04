import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpatiententryComponent } from './adminpatiententry.component';

describe('AdminpatiententryComponent', () => {
  let component: AdminpatiententryComponent;
  let fixture: ComponentFixture<AdminpatiententryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpatiententryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpatiententryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
