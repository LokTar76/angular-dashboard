import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private http: HttpClient
  ) { }

  private feedbackUrl = 'https://localhost:5001/api/Review';
  private feedbackNumbersUrl = 'https://localhost:5001/api/Review/statistics';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  /* Get all feedback tasks */
  getFeedbackTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.feedbackUrl)
      .pipe(
        catchError(this.handleError<any[]>('getFeedbackTasks', []))
      );
  }

  /* Get number of feedbacks in different status */
  getNumberOfFeedbacksByStatus(): Observable<any[]> {
    return this.http.get<any[]>(this.feedbackNumbersUrl)
      .pipe(
        catchError(this.handleError<any[]>('getNumberOfFeedbacksByStatus', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
