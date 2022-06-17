import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackPieComponent } from './feedback-pie.component';

describe('FeedbackPieComponent', () => {
  let component: FeedbackPieComponent;
  let fixture: ComponentFixture<FeedbackPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
