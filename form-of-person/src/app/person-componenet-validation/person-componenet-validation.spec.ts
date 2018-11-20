import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComponenetValidation } from './person-componenet-validation';

describe('PersonComponenetValidation', () => {
  let component: PersonComponenetValidation;
  let fixture: ComponentFixture<PersonComponenetValidation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonComponenetValidation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponenetValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
