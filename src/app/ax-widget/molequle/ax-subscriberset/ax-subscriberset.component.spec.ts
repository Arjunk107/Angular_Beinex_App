import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxSubscribersetComponent } from './ax-subscriberset.component';

describe('AxSubscribersetComponent', () => {
  let component: AxSubscribersetComponent;
  let fixture: ComponentFixture<AxSubscribersetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxSubscribersetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxSubscribersetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
