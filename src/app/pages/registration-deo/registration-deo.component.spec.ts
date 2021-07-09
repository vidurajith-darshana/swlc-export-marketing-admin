import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDEOComponent } from './registration-deo.component';

describe('RegistrationDEOComponent', () => {
  let component: RegistrationDEOComponent;
  let fixture: ComponentFixture<RegistrationDEOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationDEOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDEOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
