import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

import { Recipe } from '../shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';
import { RemoveItemComponent } from './remove-item.component';

@Component({
    templateUrl: 'recipe-list.component.html',
    styleUrls: ['recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    protected recipes: Array<Recipe>;
    protected componentData = null;
    protected recipesLoaded = false;

    constructor(protected recipeService: RecipeService) { }

    ngOnInit() {
        this.recipeService.getRecipes().subscribe(
            (data) => {
                this.recipes = data;
                this.recipesLoaded = true;
            }
        );
    }

    delete(recipeId: number) {
        this.componentData = {
            component: RemoveItemComponent,
            inputs: {
                recipeId: recipeId
            }
        };
    }
}
