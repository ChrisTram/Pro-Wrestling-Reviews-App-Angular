import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListReviewComponent }    from './list-review.component';
import { DetailReviewComponent }  from './detail-review.component';
//import { EditReviewComponent } from './edit-review.component';

import { AuthGuard } from '../auth-guard.service';

// les routes du module Wrestling
const wrestlingRoutes: Routes = [
	{	path: 'reviews/all', component: ListReviewComponent } ,
	{ 	path: 'reviews/:name', component: DetailReviewComponent },
/*	{
		path: 'wrestling',
		canActivate: [AuthGuard],
		children: [
			{ path: 'wrestling/:id', component: EditReviewComponent, canActivate: [AuthGuard] },

		]
	}*/
	
];

@NgModule({
	imports: [
		RouterModule.forChild(wrestlingRoutes)
	],
	exports: [
		RouterModule
	]
})
export class WrestlingRoutingModule { }