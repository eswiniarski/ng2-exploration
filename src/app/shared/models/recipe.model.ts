import { Ingredient } from './ingredient.model';

export class Recipe {
    id: number;
    title: string;
    content: string;
    type: string; //private / public
    ingredients: Array<Ingredient>;

    constructor(title: string, content: string, type: string, ingredients: Array<Ingredient>) {
        this.title = title;
        this.content = content;
        this.type = type;
        this.ingredients = ingredients;
    }
}
