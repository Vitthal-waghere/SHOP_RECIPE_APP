import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemsComponent } from './recipes/recipe-list/recipe-items/recipe-items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { shoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeEditComponent,
    AuthComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [shoppingListService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
