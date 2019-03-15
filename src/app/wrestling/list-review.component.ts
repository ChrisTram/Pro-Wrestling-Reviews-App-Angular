import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Review } from './review';
import { Router } from '@angular/router';
import { ReviewsService } from './reviews.service';
import { animation, animate, trigger, state, style, transition  } from '@angular/animations';
import { removeTrailingSlash } from 'angular-in-memory-web-api';
import { bufferToggle } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { AppComponent } from '../app.component';


@Component({
  selector: 'list-review',
  templateUrl: `./list-review.component.html`,
  animations: [
    trigger('openClose', [
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

  constructor(private router: Router, private reviewsService : ReviewsService, private titleService : AppComponent) { }

   ngOnInit() : void {
     
    this.getReviews("-type"); //par défaut on trie par type, cela me permettra un affichage un peu perso
                             //TODO remanier l'attribut "type" afin de vraiment avoir un trie perso
    this.typesOptions = this.reviewsService.getReviewTypes();
    this.typesWhiteList = this.reviewsService.getReviewTypes();
    this.titleService.updateTitle("Reviews")
    
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
    
    if(this.useWhiteList === false) { //A la première sélection on active la liste blanche
      this.typesWhiteList.length = 0;
      this.useWhiteList=true;
    }
    
		let checked = $event.target.checked; //On vérifie l'action
		if (checked) {
      this.typesWhiteList.push(type);
		} else {
			let index = this.typesWhiteList.indexOf(type);
			if (~index) {
				this.typesWhiteList.splice(index, 1);
			}
    }

    if (this.typesWhiteList.length===0) { //Si rien n'est sélectionné on remet l'état par défaut
      this.reset();
    }
    console.log(this.typesWhiteList);
  }

}