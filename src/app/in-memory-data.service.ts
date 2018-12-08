import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemons/mock-pokemon';
import { MATCHS } from './wrestling/mock-match';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let pokemons = POKEMONS;
		let matchs = MATCHS;
		return { pokemons, matchs };
	}
}