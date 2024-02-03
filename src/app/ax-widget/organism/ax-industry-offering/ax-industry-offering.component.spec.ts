import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxIndustryOfferingComponent } from './ax-industry-offering.component';

describe('AxIndustryOfferingComponent', () => {
  let component: AxIndustryOfferingComponent;
  let fixture: ComponentFixture<AxIndustryOfferingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxIndustryOfferingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxIndustryOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
