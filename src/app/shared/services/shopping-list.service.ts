import { Injectable } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class ShoppingListService {

    protected items = [];

    getItems() {
        return this.items;
    }

    addItem(item: Ingredient) {
        this.items.push(item);
    }

}
