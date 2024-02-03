import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxMediaIconsComponent } from './ax-media-icons.component';

describe('AxMediaIconsComponent', () => {
  let component: AxMediaIconsComponent;
  let fixture: ComponentFixture<AxMediaIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxMediaIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxMediaIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
