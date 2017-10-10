import { Recipe } from '../models/recipe.model';

export const RECIPES: Recipe[] = [
    {id: 1, title: 'Recipe 1', content: 'Recipe 1 content', type: 'public', 'ingredients': [{'id': 1, 'name': 'Ingredient 1', 'amount': 1}, {'id': 1, 'name': 'Ingredient 2', 'amount': 2}]},
    {id: 2, title: 'Recipe 2', content: 'Recipe 2 content', type: 'private', 'ingredients': [{'id': 1, 'name': 'Ingredient 1', 'amount': 1}, {'id': 1, 'name': 'Ingredient 2', 'amount': 2}]}
];
