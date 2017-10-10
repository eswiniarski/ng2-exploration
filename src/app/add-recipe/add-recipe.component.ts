import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { Observable } from 'rxjs/Rx';

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

    constructor(protected recipeService: RecipeService) { }

    ngOnInit() {
        this.addForm = new FormGroup({
            'title': new FormControl('', [Validators.required]),
            'content': new FormControl('', [Validators.required]),
            'recipeType': new FormControl('public'),
            'ingredients': new FormArray([
                new FormGroup({
                    'name': new FormControl('Test', [Validators.required]),
                    'amount': new FormControl(1, [Validators.required, Validators.pattern('\\d+')]),
                }),
            ]),
        });
    }

    onSubmit() {
        let formValues = this.addForm.value;
        let tmpIngredients = [];

        formValues.ingredients.forEach(ingredient => {
            let tmpIngredient = new Ingredient(ingredient.name, ingredient.amount);
            tmpIngredients.push(tmpIngredient);
        });

        let newRecipe = new Recipe('Title', 'content', 'public', tmpIngredients);
        this.recipeService.addRecipe(newRecipe);
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

}
