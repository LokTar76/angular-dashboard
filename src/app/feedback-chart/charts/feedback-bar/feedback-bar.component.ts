import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 59, 80, 81, 56, 54, 20], label: 'Fall Sales' },
  { data: [30, 75, 23, 14, 86, 94, 60], label: 'Winter Sales' },
];

const SAMPLE_BARCHART_LABELS: string[] = [
  'W1',
  'W2',
  'W3',
  'W4',
  'W5',
  'W6',
  'W7',
];

@Component({
  selector: 'app-feedback-bar',
  templateUrl: './feedback-bar.component.html',
  styleUrls: ['./feedback-bar.component.css'],
})
export class FeedbackBarComponent implements OnInit {
  constructor() {}

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  ngOnInit(): void {}
}
