import { Injectable } from '@angular/core';

import { RECIPES } from '../mocks/recipes.mock';

@Injectable()
export class RecipeService {

    getRecipes() {
        return RECIPES;
    }

    getRecipeById(id: number) {
        return RECIPES[id];
    }

}
