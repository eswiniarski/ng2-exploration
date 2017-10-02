import { Component, OnInit } from '@angular/core';

import { Recipe } from '../shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
    selector: 'rb-recipe-list',
    templateUrl: 'recipe-list.component.html',
    styleUrls: ['recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    protected recipes: Array<Recipe>;

    constructor(protected recipeService: RecipeService) {}

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }

}
