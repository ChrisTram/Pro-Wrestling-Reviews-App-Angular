import { Component, OnInit } from '@angular/core';
import { ReviewsService } from './reviews.service';
import { Review } from './review';

@Component({
  selector: 'star-review',
  templateUrl: './star-review.component.html',
})
export class StarReviewComponent implements OnInit {
  starReviews: Review[] = Array();


  constructor(private reviewsService : ReviewsService) { }

  ngOnInit() {
    this.getStarReviews();
  }

  getStarReviews() : void {

    this.reviewsService.getReview(1).subscribe(review => { this.starReviews.push(review);});
    this.reviewsService.getReview(2).subscribe(review => { this.starReviews.push(review);});
    this.reviewsService.getReview(3).subscribe(review => { this.starReviews.push(review);});

  }
}
