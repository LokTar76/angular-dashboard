import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackBarComponent } from './feedback-bar.component';

describe('FeedbackBarComponent', () => {
  let component: FeedbackBarComponent;
  let fixture: ComponentFixture<FeedbackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
