import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxIndustryPointsComponent } from './ax-industry-points.component';

describe('AxIndustryPointsComponent', () => {
  let component: AxIndustryPointsComponent;
  let fixture: ComponentFixture<AxIndustryPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxIndustryPointsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxIndustryPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
