import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxPolicyFooterComponent } from './ax-policy-footer.component';

describe('AxPolicyFooterComponent', () => {
  let component: AxPolicyFooterComponent;
  let fixture: ComponentFixture<AxPolicyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxPolicyFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxPolicyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
