import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { of } from "rxjs";

import { MatchsService } from './matchs.service';
import { Match } from './match';
import { Subject } from 'rxjs';
 
@Component({
	selector: 'wrestling-search',
	templateUrl: './app/wrestling/search-match.component.html'
})
export class MatchSearchComponent implements OnInit {
 
	private searchTerms = new Subject<string>();
	matchs$: Observable<Match[]>;
 
	constructor(
		private matchsService: MatchsService,
		private router: Router) { }
 
	// Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
	search(term: string): void {
		this.searchTerms.next(term);
	}
 
	ngOnInit(): void {
		this.matchs$ = this.searchTerms.pipe(
			// attendre 300ms de pause entre chaque requête
			debounceTime(300),
			// ignorer la recherche en cours si c'est la même que la précédente
			distinctUntilChanged(),
			// on retourne la liste des résultats correspondant aux termes de la recherche
			switchMap((term: string) => this.matchsService.searchMatch(term)),
		);
	}
 
	gotoDetail(match: Match): void {
		let link = ['/wrestling', match.id];
		this.router.navigate(link);
	}
}