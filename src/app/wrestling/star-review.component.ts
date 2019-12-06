import { Component, OnInit } from '@angular/core';
import { ReviewsService } from './reviews.service';
import { Review } from './review';
import { Router } from '@angular/router';

@Component({
  selector: 'star-review',
  templateUrl: './star-review.component.html',
})
export class StarReviewComponent implements OnInit {
  starReviews: Review[] = Array();


  constructor(private router: Router, private reviewsService : ReviewsService) { }

  ngOnInit() {
    this.getStarReviews();
  }

  getStarReviews() : void {

    this.reviewsService.getReview(11).subscribe(review => { this.starReviews.push(review);});
    this.reviewsService.getReview(22).subscribe(review => { this.starReviews.push(review);});
    this.reviewsService.getReview(33).subscribe(review => { this.starReviews.push(review);});

  }

  selectReview(review: Review) {
    console.log("Vous avez cliqué sur " + review.name);
    
    if (review.driveLink == null) {
      let link =['/reviews', review.name.split(' ').join('_')];
      this.router.navigate(link);
    }
    else {
      this.reviewsService.gotoDriveLink(review);
    }

  }
}
