import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdoctorComponent } from './navdoctor.component';

describe('NavdoctorComponent', () => {
  let component: NavdoctorComponent;
  let fixture: ComponentFixture<NavdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
