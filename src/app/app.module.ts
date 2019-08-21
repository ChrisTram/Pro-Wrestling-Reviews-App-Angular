import { NgModule } from '@angular/core';
import { BrowserModule, Title  } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { WrestlingModule } from './wrestling/wrestling.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
	imports: [
	  BrowserModule,
	  HttpClientModule, 
	  FormsModule,
	  BrowserAnimationsModule,
	  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
	  WrestlingModule,
	  LoginRoutingModule,
	  AppRoutingModule
	],
	declarations: [
		AppComponent,
		LoginComponent,
		PageNotFoundComponent,
	],
	providers: [
		Title,
		{provide: LocationStrategy, useClass: PathLocationStrategy},
	],
	bootstrap: [AppComponent]
})
export class AppModule { }