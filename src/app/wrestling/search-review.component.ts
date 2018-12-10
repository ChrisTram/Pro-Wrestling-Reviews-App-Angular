import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { of } from "rxjs";

import { ReviewsService } from './reviews.service';
import { Review } from './review';
import { Subject } from 'rxjs';
 
@Component({
	selector: 'wrestling-search',
	templateUrl: './app/wrestling/search-review.component.html'
})
export class ReviewSearchComponent implements OnInit {
 
	private searchTerms = new Subject<string>();
	reviews$: Observable<Review[]>;
 
	constructor(
		private reviewsService: ReviewsService,
		private router: Router) { }
 
	// Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
	search(term: string): void {
		this.searchTerms.next(term);
	}
 
	ngOnInit(): void {
		this.reviews$ = this.searchTerms.pipe(
			// attendre 300ms de pause entre chaque requête
			debounceTime(300),
			// ignorer la recherche en cours si c'est la même que la précédente
			distinctUntilChanged(),
			// on retourne la liste des résultats correspondant aux termes de la recherche
			switchMap((term: string) => this.reviewsService.searchReview(term)),
		);
	}
 
	gotoDetail(review: Review): void {
		let link = ['/wrestling', review.id];
		this.router.navigate(link);
	}
}