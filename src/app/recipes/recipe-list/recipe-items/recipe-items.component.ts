import { Component, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent {

  @Input() recipe !: Recipe;
  //@Output() recipeSelected = new EventEmitter<void>();
  
  @Input() index !: number;

}
