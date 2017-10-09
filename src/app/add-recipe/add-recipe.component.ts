import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { Observable } from 'rxjs/Rx';

@Component({
    templateUrl: 'add-recipe.component.html',
    styleUrls: ['add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
    addForm: FormGroup;
    recipeTypes = ['public', 'private'];

    constructor() { }

    ngOnInit() {
        this.addForm = new FormGroup({
            'title': new FormControl(),
            'content': new FormControl(),
            'recipeType': new FormControl('public'),
            'ingredients': new FormArray([
                new FormGroup({
                    'name': new FormControl('a'),
                    'amount': new FormControl('b'),
                }),
            ]),
        });
    }

    onSubmit() {
        console.log(this.addForm);
    }

    onAddIngredient(name: string, amount: string) {
        (<FormArray>this.addForm.get('ingredients')).push(
            new FormGroup({
                'name': new FormControl(name),
                'amount': new FormControl(amount)
            })
        );
    }

    onRemoveIngredient(rIndex: number) {
        (<FormArray>this.addForm.get('ingredients')).removeAt(rIndex);
    }

}
