import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Review } from './review';
import { ReviewsService } from './reviews.service';

@Component({
	selector: 'detail-review',
	templateUrl: './detail-review.component.html',
})
export class DetailReviewComponent implements OnInit {

	review: Review = null;

	constructor(
		private route: ActivatedRoute, 
		private router: Router,
		private reviewsService: ReviewsService) {}

	ngOnInit(): void {
/*
		let id = this.route.snapshot.paramMap.get('name');
		this.reviewsService.getReviewByName(id.split('_').join(' '))
		.subscribe(review => this.review = review);*/

		let id = +this.route.snapshot.paramMap.get('id');
		this.reviewsService.getReview(id)
		.subscribe(review => this.review = review);
	}

	delete(review: Review): void{
		this.reviewsService.deleteReview(review)
		.subscribe(_ => this.goBack());
	}

	goBack(): void {
		this.router.navigate(['/reviews/all']);
	}	
	goEdit(review: Review): void {
		let link = ['review/edit', review.id];
		this.router.navigate(link);
	}

}