import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Feedback } from '../shared/feedback';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback-task',
  templateUrl: './feedback-task.component.html',
  styleUrls: ['./feedback-task.component.css'],
})
export class FeedbackTaskComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'created', 'processed', 'status']; // Displayed columns
  dataSource!: MatTableDataSource<Feedback>;
  feedbackTasks!: Feedback[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  constructor(private _service: FeedbackService) {}

  ngOnInit(): void {
    this._service.getFeedbackTasks().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
