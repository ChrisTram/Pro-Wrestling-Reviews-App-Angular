import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemons/mock-pokemon';
import { REVIEWS } from './wrestling/mock-review';
//utilisation du mock à nouveau, le node js c'est bien mais pas sur un serveur mutualisé...

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let pokemons = POKEMONS;
		let reviews = REVIEWS;
		return { pokemons, reviews };
	}
}