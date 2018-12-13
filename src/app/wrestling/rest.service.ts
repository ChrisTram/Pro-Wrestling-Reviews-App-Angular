/*import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Review } from './review';

const endpoint = 'http://localhost:3000/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getReviews(): Observable<any> {
    return this.http.get(endpoint + 'reviews').pipe(
      map(this.extractData));
  }

  getReview(id: number): Observable<any> {
    return this.http.get(endpoint + 'reviews/' + id).pipe(
      map(this.extractData));
  }

  addReview (review : Review): Observable<any> {
    console.log(review);
    return this.http.post<any>(endpoint + 'reviews', JSON.stringify(review), httpOptions).pipe(
      tap((review) => console.log(`added review w/ id=${review.id}`)),
      catchError(this.handleError<any>('addReview'))
    );
  }

  updateReview (id: string, review): Observable<any> {
    return this.http.put(endpoint + 'reviews/' + id, JSON.stringify(review), httpOptions).pipe(
      tap(_ => console.log(`updated review id=${id}`)),
      catchError(this.handleError<any>('updateReview'))
    );
  }

  deleteReview (id: string): Observable<any> {
    return this.http.delete<any>(endpoint + 'reviews/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted review id=${id}`)),
      catchError(this.handleError<any>('deleteReview'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}*/