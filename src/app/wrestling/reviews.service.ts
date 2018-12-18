import { Injectable } from '@angular/core';
import { Review } from './review';
import { REVIEWS } from './mock-review';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { of } from 'rxjs'

@Injectable()
export class ReviewsService {

    constructor(private http: HttpClient) { }

    private reviewsUrl = 'api/reviews';

    private log(log: string) {
      console.info(log);
    }

    private handleError<T>(operation='operation', result?:T) {
      return (error: any): Observable<T> => {
        console.log(error);
        console.log(`${operation} failed: ${error.message}`)
        
        return of(result as T);
      }
    }

    updateReview(review: Review): Observable<Review> {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };

      return this.http.put(this.reviewsUrl, review, httpOptions).pipe(
        tap(_ => this.log(`update review id = ${review.id}`)),
        catchError(this.handleError<any>('updatedReview'))
      );
    }



    deleteReview(review: Review) : Observable<Review> {
      const url = `${this.reviewsUrl}/${review.id}`;
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
      };

      return this.http.delete<Review>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted review id=${review.id}`)),
        catchError(this.handleError<Review>('deleteReview'))
      );
    }

    // Retourne tous les reviews
    getReviews(): Observable<Review[]> {
      return this.http.get<Review[]>(this.reviewsUrl).pipe(
        tap(_ => this.log(`fetched reviews`)), 
          catchError(this.handleError(`getReviews`, []))
      );
    }

    getReviewTypes(): string[] {
        return ['WWEPPV','NJPW', 'Liste 4*+', 'JAP', 'IMPACT', 'INDÉ', 'ROH', 'PWG', 'WWE NXT', 'BILAN'];
    }
    
    // Retourne le review avec l'identifiant passé en paramètre
    getReview(id: number): Observable<Review> {
      const url = `${this.reviewsUrl}/${id}`;

      return this.http.get<Review>(url).pipe(
        tap(_ => this.log(`fetched review id=${id}`)),
        catchError(this.handleError<Review>(`getReview id=${id}`))
      );
    }
    getReviewByName(name: string): Observable<Review> {
      const url = `${this.reviewsUrl}/?name=${name}`;

      return this.http.get<Review>(url).pipe(
        tap(_ => this.log(`fetched review name=${name}`)),
        catchError(this.handleError<Review>(`getReview name=${name}`))
      );
    }
    
    searchReview(term: string): Observable<Review[]> {
      if(!term.trim()) {
        return of([]);
      }
      
      return this.http.get<Review[]>(`${this.reviewsUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found reviews reviewing "${term}"`)),
        catchError(this.handleError<Review[]>('searchReviews', []))
      );
    }

  gotoDriveLink(review: Review) {
      window.open(review.driveLink, "_blank");
  }

  dynamicSort(property:any) {
    
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    
    return function (a:Review,b:Review) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
}