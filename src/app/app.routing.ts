import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './recipe-list/recipe-list.component';

const APP_ROUTES: Routes = [
    {path: '', component: RecipeListComponent, data: {title: 'Recipes'}},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
