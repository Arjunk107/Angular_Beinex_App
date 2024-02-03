import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxScheduleCallComponent } from './ax-schedule-call.component';

describe('AxScheduleCallComponent', () => {
  let component: AxScheduleCallComponent;
  let fixture: ComponentFixture<AxScheduleCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxScheduleCallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxScheduleCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
