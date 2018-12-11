import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Review } from './review';
import { Router } from '@angular/router';
import { ReviewsService } from './reviews.service'

@Component({
  selector: 'list-review',
  templateUrl: `./list-review.component.html`,
})
export class ListReviewComponent {

  reviews: Review[] = null;

  constructor(private router: Router, private reviewsService : ReviewsService) { }

   ngOnInit() : void {
    this.getReviews();
  }

  getReviews() : void {
    this.reviewsService.getReviews()
    .subscribe(reviews => this.reviews = reviews);
  }

  selectReview(review: Review) {
    console.log("Vous avez cliqué sur " + review.name);
    let link =['/review', review.name];
    this.router.navigate(link);
  }


}