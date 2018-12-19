import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Review } from './review';
import { Router } from '@angular/router';
import { ReviewsService } from './reviews.service';
import { animation, animate, trigger, state, style, transition  } from '@angular/animations';
import { removeTrailingSlash } from 'angular-in-memory-web-api';
import { bufferToggle } from 'rxjs/operators';

@Component({
  selector: 'list-review',
  templateUrl: `./list-review.component.html`,
  animations: [
    trigger('openClose', [
      /*
      state('open', style({
        backgroundColor: 'yellow'
      })),
      state('closed', style({

      })),*/
      state('in', style({opacity: 1})), //le "resting" state

      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),
    ]),
  ]
})
export class ListReviewComponent {

  reviews: Review[] = null;
  typesOptions: string[] = null; 

  typesWhiteList: string[] = null;
  useWhiteList:boolean = false;
  activeTypeAnim:string = "";

  constructor(private router: Router, private reviewsService : ReviewsService) { }

   ngOnInit() : void {
     
    this.getReviews("type"); //par défaut un trie par type
    this.typesOptions = this.reviewsService.getReviewTypes();
    this.typesWhiteList = this.reviewsService.getReviewTypes();
  }


  getReviews(sortProperty:string) : void {
    this.reviewsService.getReviews()
    .subscribe(reviews => this.reviews = reviews.sort(this.reviewsService.dynamicSort(sortProperty)));
    console.log("le tableau trié : ", this.reviews);
    console.log("la propriété de trie : ", sortProperty);
  }


  reset() : void {
    this.typesWhiteList = this.reviewsService.getReviewTypes();
    this.useWhiteList=false;
  }

  isCheck(type:string) : boolean {

   if(!this.useWhiteList) {
     return false; //Par défaut on décoche tout, on n'utilise pas le trie
   }
   if(this.typesWhiteList.indexOf(type) !== -1) {
    return true; //l'attribut est dans la white list
    } else {
     return false;
    }
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
    
    if(this.useWhiteList === false) {
      this.typesWhiteList.length = 0;
      this.useWhiteList=true;
    } else {
      
    }
    
		let checked = $event.target.checked;
		if (checked) {
      this.typesWhiteList.push(type);
      this.activeTypeAnim = type;
		} else {
			let index = this.typesWhiteList.indexOf(type);
			if (~index) {
				this.typesWhiteList.splice(index, 1);
			}
    }
    console.log(this.typesWhiteList);
  }
  /*
  checkTypeAnim(type:string): boolean {
    console.log("le type à animer actuel",this.activeTypeAnim);
    console.log("le type comparé",type);

    if (this.activeTypeAnim === type) {return true; } else { return false;}
  }*/

}