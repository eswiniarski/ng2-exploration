import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from './shared/services/in-memory-data.service';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

import { routing } from './app.routing';

import { RecipeService } from './shared/services/recipe.service';
import { ShoppingListService } from './shared/services/shopping-list.service';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeShowComponent } from './recipe-show/recipe-show.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DynamicComponentComponent } from './recipe-list/dynamic-component.component';
import { DynamicComponentService } from './shared/services/dynamic-component.service';
import { RemoveItemComponent } from './recipe-list/remove-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    RecipeListComponent,
    AddRecipeComponent,
    RecipeShowComponent,
    NotFoundComponent,
    ShoppingListComponent,
    DynamicComponentComponent,
    RemoveItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Angular2FontawesomeModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
      RecipeService,
      ShoppingListService,
      DynamicComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
