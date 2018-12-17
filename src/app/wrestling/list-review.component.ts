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
    .subscribe(reviews => this.reviews = reviews.sort((a,b) => (a.types[0] > b.types[0]) ? 1 : ((b.types[0] > a.types[0]) ? -1 : 0)));
    console.log("le tableau trié : ", this.reviews);
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