import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReviewReportComponent } from './customer-review-report.component';

describe('CustomerReviewReportComponent', () => {
  let component: CustomerReviewReportComponent;
  let fixture: ComponentFixture<CustomerReviewReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerReviewReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReviewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
