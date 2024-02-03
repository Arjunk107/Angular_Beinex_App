import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxTrailsComponent } from './ax-trails.component';

describe('AxTrailsComponent', () => {
  let component: AxTrailsComponent;
  let fixture: ComponentFixture<AxTrailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxTrailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
