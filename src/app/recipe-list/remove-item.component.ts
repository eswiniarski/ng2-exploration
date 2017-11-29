import { Component, OnInit, Injector } from '@angular/core';

import { DynamicComponentService } from '../shared/services/dynamic-component.service';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
    selector: 'rb-hello-component',
    templateUrl: 'remove-item.component.html'
})
export class RemoveItemComponent implements OnInit {
    protected recipeToDelete : number;
    constructor(protected dynamicComponentService: DynamicComponentService, protected injector: Injector, protected recipeService: RecipeService) { }

    ngOnInit() {
        this.recipeToDelete = this.injector.get('recipeId');
    }

    deleteItem() {
        this.recipeService.delete(this.recipeToDelete);
        this.closeModal();
    }

    closeModal() {
        this.dynamicComponentService.destroyComponent();
    }

}
