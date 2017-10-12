import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
    selector: 'rb-shopping-list',
    templateUrl: 'shopping-list.component.html',
    styleUrls: ['shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    protected items = [];

    constructor(protected shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.items = this.shoppingListService.getItems();
    }

}
