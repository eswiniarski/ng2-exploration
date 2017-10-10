import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeShowComponent } from './recipe-show/recipe-show.component';
import { NotFoundComponent } from './not-found/not-found.component';

const APP_ROUTES: Routes = [
    {path: 'recipe/add', component: AddRecipeComponent, data: {title: 'Add recipe'}},
    {path: 'recipe/:id/show', component: RecipeShowComponent, data: {title: 'Show recipe'}},
    {path: '404', component: NotFoundComponent, data: {title: 'Not Found'}},
    {path: '', component: RecipeListComponent, data: {title: 'Recipes'}},
    {path: '**', redirectTo: '404'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
