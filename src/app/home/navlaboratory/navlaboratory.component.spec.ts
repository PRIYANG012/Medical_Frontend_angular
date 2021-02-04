import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlaboratoryComponent } from './navlaboratory.component';

describe('NavlaboratoryComponent', () => {
  let component: NavlaboratoryComponent;
  let fixture: ComponentFixture<NavlaboratoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavlaboratoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavlaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
