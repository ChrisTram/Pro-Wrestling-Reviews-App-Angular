import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrestlingRoutingModule } from './wrestling-routing.module';

import { ListMatchComponent } from './list-match.component';
//import { DetailMatchComponent } from './detail-match.component';
import { BorderCardDirective } from './border-card.directive';
//import { MatchTypeColorPipe } from './match-type-color.pipe';
import { MatchsService } from './matchs.service';

import { FormsModule } from '@angular/forms';
//import { EditMatchComponent } from './edit-match.component';
//import { MatchFormComponent } from './match-form.component';
import { AuthGuard } from '../auth-guard.service';

import { MatchSearchComponent } from './search-match.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		WrestlingRoutingModule
	],
	declarations: [
		ListMatchComponent,
//		DetailMatchComponent,
//  	EditMatchComponent,
//		MatchFormComponent,
		MatchSearchComponent,
		BorderCardDirective
//		MatchTypeColorPipe
	],
	providers: [MatchsService, AuthGuard]
})
export class WrestlingModule { }