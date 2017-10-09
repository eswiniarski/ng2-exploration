import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeShowComponent } from './recipe-show/recipe-show.component';

const APP_ROUTES: Routes = [
    {path: '', component: RecipeListComponent, data: {title: 'Recipes'}},
    {path: 'recipe/add', component: AddRecipeComponent, data: {title: 'Add recipe'}},
    {path: 'recipe/:id/show', component: RecipeShowComponent, data: {title: 'Show recipe'}},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
