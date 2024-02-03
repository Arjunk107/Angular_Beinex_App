import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxPlacesComponent } from './ax-places.component';

describe('AxPlacesComponent', () => {
  let component: AxPlacesComponent;
  let fixture: ComponentFixture<AxPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxPlacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
