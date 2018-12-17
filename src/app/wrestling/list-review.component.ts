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
  sortPropert:string = "name";

  constructor(private router: Router, private reviewsService : ReviewsService) { }

   ngOnInit() : void {
    this.getReviews(this.sortPropert);


  }

  getReviews(sortProperty:string) : void {
    this.reviewsService.getReviews()
    .subscribe(reviews => this.reviews = reviews.sort(this.reviewsService.dynamicSort(sortProperty)));
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