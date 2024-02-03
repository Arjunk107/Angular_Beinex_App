import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxInputsComponent } from './ax-inputs.component';

describe('AxInputsComponent', () => {
  let component: AxInputsComponent;
  let fixture: ComponentFixture<AxInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxInputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
