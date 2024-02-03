import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxContactUsComponent } from './ax-contact-us.component';

describe('AxContactUsComponent', () => {
  let component: AxContactUsComponent;
  let fixture: ComponentFixture<AxContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxContactUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
