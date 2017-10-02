import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

import { routing } from './app.routing';

import { RecipeService } from './shared/services/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    routing
  ],
  providers: [
      RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
