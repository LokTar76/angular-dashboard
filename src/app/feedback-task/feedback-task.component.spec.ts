import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTaskComponent } from './feedback-task.component';

describe('FeedbackTaskComponent', () => {
  let component: FeedbackTaskComponent;
  let fixture: ComponentFixture<FeedbackTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
