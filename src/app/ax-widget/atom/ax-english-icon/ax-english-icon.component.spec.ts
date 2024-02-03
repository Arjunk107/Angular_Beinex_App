import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxEnglishIconComponent } from './ax-english-icon.component';

describe('AxEnglishIconComponent', () => {
  let component: AxEnglishIconComponent;
  let fixture: ComponentFixture<AxEnglishIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxEnglishIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxEnglishIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
