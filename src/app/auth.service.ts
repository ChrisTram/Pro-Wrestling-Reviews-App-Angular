import { Injectable } from '@angular/core';
// RxJS 6
import { Observable} from 'rxjs/Observable';
import { tap, delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
	isLoggedIn: boolean = false; // L'utilisateur est-il connecté ?
	redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?
	// Une méthode de connexion
	login(name: string, password: string): Observable<boolean> {
		//TODO utiliser vrai service d'auth
		let isLoggedIn = (name === 'pikachu' && password === 'pikachu');

		return of(true).pipe(
			delay(1000),
			tap(val => this.isLoggedIn = isLoggedIn)
		);
	}

	// Une méthode de déconnexion
	logout(): void {
		this.isLoggedIn = false;
	}
}