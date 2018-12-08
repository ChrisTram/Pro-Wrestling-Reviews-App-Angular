import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListMatchComponent }    from './list-match.component';
//import { DetailMatchComponent }  from './detail-match.component';
//import { EditMatchComponent } from './edit-match.component';

import { AuthGuard } from '../auth-guard.service';

// les routes du module Wrestling
const wrestlingRoutes: Routes = [
	{	path: 'wrestling/all', component: ListMatchComponent } ,
/*	{ 	path: 'match/:id', component: DetailMatchComponent },
	{
		path: 'match',
		canActivate: [AuthGuard],
		children: [
			{ path: 'edit/:id', component: EditMatchComponent, canActivate: [AuthGuard] },

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