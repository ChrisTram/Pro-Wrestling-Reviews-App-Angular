import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemon.module';
import { WrestlingModule } from './wrestling/wrestling.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
	imports: [
	  BrowserModule,
	  HttpClientModule, 
	  FormsModule,
//	  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
	  PokemonsModule,
	  WrestlingModule,
	  LoginRoutingModule,
	  AppRoutingModule
	],
	declarations: [
		AppComponent,
		LoginComponent,
		PageNotFoundComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }