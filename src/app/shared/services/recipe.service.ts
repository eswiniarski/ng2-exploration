import { Injectable } from '@angular/core';

import { RECIPES } from '../mocks/recipes.mock';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class RecipeService {

    getRecipes() {
        return RECIPES;
    }

    getRecipeById(id: number) {
        return RECIPES[id-1];
    }

    addRecipe(recipe: Recipe) {
        RECIPES.push(recipe);
    }

    deleteRecipeById(id: number) {
        RECIPES.splice(id - 1, 1);
    }

    editRecipe(recipe: Recipe) {
        RECIPES[recipe.id] = recipe;
    }
}
