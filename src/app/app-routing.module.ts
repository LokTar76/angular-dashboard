import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedbackChartComponent } from "./feedback-chart/feedback-chart.component";
import { FeedbackTaskComponent } from './feedback-task/feedback-task.component';


const routes: Routes = [
  {path: 'feedbackCharts', component: FeedbackChartComponent},
  {path: 'feedbackTask', component: FeedbackTaskComponent},
  {path: '', redirectTo: '/feedbackCharts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
