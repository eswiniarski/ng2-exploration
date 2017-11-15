import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { RECIPES } from '../mocks/recipes.mock';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class RecipeService {
    protected recipesUrl = 'api/recipes';  // URL to web api

    constructor(protected http: Http) {}

    private headers: Headers = new Headers({
       'Content-Type': 'application/json',
       'Accept': 'application/json'
   });

    private formatErrors(error: any) {
        console.log(error);
        return Observable.throw(error);
    }

    getRecipes() {
        return this.http.get(this.recipesUrl, this.headers)
            .map((response: Response) => response.json())
            .catch(this.formatErrors);
    }

    getRecipeById(id: number) {
        return RECIPES[id-1];
    }

    addRecipe(recipe: Recipe) {
        // RECIPES.push(recipe);

        return this.http.post(this.recipesUrl, JSON.stringify(recipe), this.headers)
            .map((response: Response) => response.json())
            .catch(this.formatErrors).subscribe();
    }

    deleteRecipeById(id: number) {
        RECIPES.splice(id - 1, 1);
    }

    editRecipe(recipe: Recipe) {
        RECIPES[recipe.id] = recipe;
    }
}
