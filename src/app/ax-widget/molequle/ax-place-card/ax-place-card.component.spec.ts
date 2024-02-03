import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxPlaceCardComponent } from './ax-place-card.component';

describe('AxPlaceCardComponent', () => {
  let component: AxPlaceCardComponent;
  let fixture: ComponentFixture<AxPlaceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxPlaceCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxPlaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
