import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FeedbackChartComponent} from "./feedback-chart/feedback-chart.component";
import {FeedbackTableComponent} from "./feedback-table/feedback-table.component";

const routes: Routes = [
  {path: 'feedbackCharts', component: FeedbackChartComponent},
  {path: 'feedbackTable', component: FeedbackTableComponent},
  {path: '', redirectTo: '/feedbackCharts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
