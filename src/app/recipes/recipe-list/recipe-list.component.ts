import { Recipe } from "../recipe.model";

import { Component, OnDestroy, OnInit} from '@angular/core';
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy  {

  //@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes !: Recipe[];
  subscription !: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipies();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route}); 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  
}