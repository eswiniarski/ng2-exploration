import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RECIPES } from '../mocks/recipes.mock';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

      const users = [
          {'id': 1, 'name': 'test'},
          {'id': 2, 'name': 'test2'}
      ];

      const recipes = RECIPES;

      return {recipes, users};
  }
}
