import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-feedback-chart',
  templateUrl: './feedback-chart.component.html',
  styleUrls: ['./feedback-chart.component.css']
})
export class FeedbackChartComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Bar', cols: 1, rows: 1, content: 'bar chart' },
          { title: 'Line', cols: 1, rows: 1, content: 'line chart' },
          { title: 'Pie', cols: 1, rows: 1, content: 'app-feedback-pie' }
        ];
      }

      return [
        { title: 'Bar', cols: 2, rows: 1, content: 'bar chart'},
        { title: 'Line', cols: 1, rows: 2, content: 'line chart'},
        { title: 'Pie', cols: 1, rows: 2, content: 'app-feedback-pie'}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
