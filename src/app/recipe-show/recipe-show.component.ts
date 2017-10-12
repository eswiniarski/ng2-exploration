import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription, Observable } from 'rxjs/Rx';

import { Recipe } from '../shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
    templateUrl: 'recipe-show.component.html',
    styleUrls: ['recipe-show.component.scss']
})
export class RecipeShowComponent implements OnInit {
    protected routerParamSubscription: Subscription;
    protected currentRecipeId :number;
    protected recipe: Recipe;

    constructor(protected recipeService: RecipeService, protected activatedRoute: ActivatedRoute, protected router: Router, protected shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.routerParamSubscription = this.activatedRoute.params.subscribe(
            (param: any) => { this.currentRecipeId = param['id'];},
            () => { console.log('Router parameter error'); }
        );

        this.recipe = this.recipeService.getRecipeById(this.currentRecipeId);

        if (this.recipe == null) {
            this.router.navigate(['404']);
        }
    }

    ngOnDestroy() {
        this.routerParamSubscription.unsubscribe();
    }

    addToShoppingList() {
        this.recipe.ingredients.forEach(ingredient => {
            this.shoppingListService.addItem(ingredient);
        });
    }
}
