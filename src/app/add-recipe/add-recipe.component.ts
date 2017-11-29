import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { Observable, Subscription } from 'rxjs/Rx';

import { Recipe } from '../shared/models/recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
    templateUrl: 'add-recipe.component.html',
    styleUrls: ['add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
    addForm: FormGroup;
    recipeTypes = ['public', 'private'];
    currentRecipeId: number;
    currentRecipe: Recipe;
    routerParamSubscription: Subscription;

    constructor(protected recipeService: RecipeService, protected activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.routerParamSubscription = this.activatedRoute.params.subscribe(
            (param: any) => { this.currentRecipeId = param['id'];},
            () => { console.log('Router parameter error'); }
        );

        if (this.currentRecipeId) {
            this.recipeService.getRecipeById(this.currentRecipeId).subscribe(
                (recipe: Recipe) => {
                    this.currentRecipe = recipe;
                },
                (err: any) => {
                    console.log('xxxdd');
                }
            );
        }

        //TODO: do this after load recipe from server or pass recipe instat of just id
        this.addForm = new FormGroup({
            'title': new FormControl(this.currentRecipe ? this.currentRecipe.title : '', [Validators.required]),
            'content': new FormControl(this.currentRecipe ? this.currentRecipe.content : '', [Validators.required]),
            'recipeType': new FormControl(this.currentRecipe ? this.currentRecipe.type : 'public'),
            'ingredients': new FormArray([]),
        });

        if (this.currentRecipe && this.currentRecipe.ingredients.length) {
            this.currentRecipe.ingredients.forEach(ingredient => {
                let tmpIngredient = new FormGroup({
                    'name': new FormControl(ingredient.name, [Validators.required]),
                    'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern('\\d+')]),
                });

                (<FormArray>this.addForm.get('ingredients')).push(tmpIngredient);
            });
        } else {
            let defaultIngredient = new FormGroup({
                'name': new FormControl('Default ingredient2', [Validators.required]),
                'amount': new FormControl(1, [Validators.required, Validators.pattern('\\d+')]),
            });

            (<FormArray>this.addForm.get('ingredients')).push(defaultIngredient);
        }
    }

    onSubmit() {
        let formValues = this.addForm.value;
        let tmpIngredients = [];

        formValues.ingredients.forEach(ingredient => {
            let tmpIngredient = new Ingredient(ingredient.name, ingredient.amount);
            tmpIngredients.push(tmpIngredient);
        });

        if (this.currentRecipe) {
            this.currentRecipe.title = formValues.title;
            this.currentRecipe.content = formValues.content;
            this.currentRecipe.type = formValues.recipeType;
            this.currentRecipe.ingredients = tmpIngredients;
            this.recipeService.editRecipe(this.currentRecipe);
        } else {
            console.log('dsf');
            let newRecipe = new Recipe(formValues.title, formValues.content, formValues.recipeType, tmpIngredients);
            this.recipeService.addRecipe(newRecipe);
        }

        this.addForm.reset();
    }

    onAddIngredient(name: string, amount: number) {
        (<FormArray>this.addForm.get('ingredients')).push(
            new FormGroup({
                'name': new FormControl(name, [Validators.required]),
                'amount': new FormControl(amount, [Validators.pattern('\\d+')])
            })
        );
    }

    onRemoveIngredient(rIndex: number) {
        (<FormArray>this.addForm.get('ingredients')).removeAt(rIndex);
    }

    ngOnDestroy() {
        this.routerParamSubscription.unsubscribe();
    }
}
