import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxViewDataComponent } from './ax-view-data.component';

describe('AxViewDataComponent', () => {
  let component: AxViewDataComponent;
  let fixture: ComponentFixture<AxViewDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxViewDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxViewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
