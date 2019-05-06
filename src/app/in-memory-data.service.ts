import { InMemoryDbService } from 'angular-in-memory-web-api';
import { REVIEWS } from './wrestling/mock-review';
//utilisation du mock à nouveau, le node js c'est bien mais pas sur un serveur mutualisé...

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let reviews = REVIEWS;
		return {reviews};
	}
}