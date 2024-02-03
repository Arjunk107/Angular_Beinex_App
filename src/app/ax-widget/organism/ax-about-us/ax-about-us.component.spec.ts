import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxAboutUsComponent } from './ax-about-us.component';

describe('AxAboutUsComponent', () => {
  let component: AxAboutUsComponent;
  let fixture: ComponentFixture<AxAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxAboutUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
