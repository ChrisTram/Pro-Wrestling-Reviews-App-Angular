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
  typesOptions: string[] = null; 
  typesWhiteList: string[] = ["4starslist"]; //A corriger, doit être pleine au début puis la vider à la première utilisation du form

  constructor(private router: Router, private reviewsService : ReviewsService) { }

   ngOnInit() : void {
     
    this.getReviews("type"); //par défaut un trie par type
    this.typesOptions = this.reviewsService.getReviewTypes();

  }

  getReviews(sortProperty:string) : void {
    this.reviewsService.getReviews()
    .subscribe(reviews => this.reviews = reviews.sort(this.reviewsService.dynamicSort(sortProperty)));
    console.log("le tableau trié : ", this.reviews);
    console.log("la propriété de trie : ", sortProperty);
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

  checkTypes(type:string) : boolean {
    return this.typesWhiteList.indexOf(type) > -1;

  }

	selectType($event: any, type: string): void {
		let checked = $event.target.checked;
		if (checked) {
			this.typesWhiteList.push(type);
		} else {
			let index = this.typesWhiteList.indexOf(type);
			if (~index) {
				this.typesWhiteList.splice(index, 1);
			}
    }
    console.log(this.typesWhiteList);
    this.getReviews("type");
	}
/*
  onSubmit(): void {
		console.log("Submit form !");
		this.typesWhiteList.push(option.id);
	}
*/
}