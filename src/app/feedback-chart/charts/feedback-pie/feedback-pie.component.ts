import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartConfiguration,
  ChartData,
  ChartEvent,
  ChartOptions,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { FeedbackService } from '../../../services/feedback.service';

@Component({
  selector: 'app-feedback-pie',
  templateUrl: './feedback-pie.component.html',
  styleUrls: ['./feedback-pie.component.css'],
})
export class FeedbackPieComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(private feedbackService: FeedbackService) {}

  // Pie Chart set up
  public pieChartData: any;
  public pieChartType: ChartType = 'doughnut';
  public colors: any[] = [
    {
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
      borderColor: '#111',
    },
  ];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  ngOnInit(): void {
    // Feed data from web api to pie chart
    this.feedbackService.getNumberOfFeedbacksByStatus().subscribe((res) => {
      this.pieChartData = {
        labels: res.map((o) => o.status),
        datasets: [
          {
            label: 'Dataset',
            data: res.map((o) => o.count),
            backgroundColor: [
              'rgb(255,99,132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(220, 143, 56)',
              'rgb(192, 168, 92)',
              'rgb(144, 243, 156)',
            ],
            borderColor: '#fcfcfc',
            hoverOffset: 4,
          },
        ],
      };
    });
    //console.log(this.data);
  }
}
