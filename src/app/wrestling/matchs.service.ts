import { Injectable } from '@angular/core';
import { Match } from './match';
import { MATCHS } from './mock-match';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { of } from 'rxjs'

@Injectable()
export class MatchsService {

    constructor(private http: HttpClient) { }

    private matchsUrl = 'api/matchs';

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

    updateMatch(match: Match): Observable<Match> {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };

      return this.http.put(this.matchsUrl, match, httpOptions).pipe(
        tap(_ => this.log(`update match id = ${match.id}`)),
        catchError(this.handleError<any>('updatedMatch'))
      );
    }

    searchMatch(term: string): Observable<Match[]> {
      if(!term.trim()) {
        return of([]);
      }
      
      return this.http.get<Match[]>(`${this.matchsUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found matchs matching "${term}"`)),
        catchError(this.handleError<Match[]>('searchMatchs', []))
      );
    }

    deleteMatch(match: Match) : Observable<Match> {
      const url = `${this.matchsUrl}/${match.id}`;
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
      };

      return this.http.delete<Match>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted match id=${match.id}`)),
        catchError(this.handleError<Match>('deleteMatch'))
      );
    }

    // Retourne tous les matchs
    getMatchs(): Observable<Match[]> {
      return this.http.get<Match[]>(this.matchsUrl).pipe(
        tap(_ => this.log(`fetched matchs`)),
        catchError(this.handleError(`getMatchs`, []))
      );
    }

    /*getMatchTypes(): string[] {
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
                'Poison', 'Fée', 'Vol'];
    }*/
    
    // Retourne le match avec l'identifiant passé en paramètre
    getMatch(id: number): Observable<Match> {
      const url = `${this.matchsUrl}/${id}`;

      return this.http.get<Match>(url).pipe(
        tap(_ => this.log(`fetched match id=${id}`)),
        catchError(this.handleError<Match>(`getMatch id=${id}`))
      );
    }
}