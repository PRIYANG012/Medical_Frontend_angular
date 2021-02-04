import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpatientComponent } from './navpatient.component';

describe('NavpatientComponent', () => {
  let component: NavpatientComponent;
  let fixture: ComponentFixture<NavpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
