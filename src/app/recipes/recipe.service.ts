import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.modal';
import { shoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  // recipeSelected = new Subject<Recipe>();

  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A Tasty Khichadi',
  //     'This is simply a taste',
  //     'https://c.ndtvimg.com/2022-03/j5jbs6g_khichdi_625x300_25_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350',
  //     [new Ingredient('Rice', 2), new Ingredient('Dal', 1)]
  //   ),
  //   new Recipe(
  //     'Big Fat Burger',
  //     'This is simply a Burger',
  //     'https://imageproxy.wolt.com/venue/5f9701003756a41c5df44088/44160478-1f8b-11eb-924e-32a15725fa55_bk_cover_with_onion_rings.jpg',
  //     [new Ingredient('Bread', 2), new Ingredient('Meat', 3)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: shoppingListService) {}

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipies() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngerdientstoShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
