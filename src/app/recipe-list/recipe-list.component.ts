import { Component, OnInit } from '@angular/core';

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
    constructor(protected recipeService: RecipeService) {}

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
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
