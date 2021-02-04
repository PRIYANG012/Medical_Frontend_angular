import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcaseregisterpatientComponent } from './newcaseregisterpatient.component';

describe('NewcaseregisterpatientComponent', () => {
  let component: NewcaseregisterpatientComponent;
  let fixture: ComponentFixture<NewcaseregisterpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcaseregisterpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcaseregisterpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
