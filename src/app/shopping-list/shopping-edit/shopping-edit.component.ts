import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';
import { shoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') slform !: NgForm;
  subscription !: Subscription;
  editMode = false;
  editedItemIndex !: number;
  editedItem !: Ingredient;

  constructor(private slService : shoppingListService){}
  
  ngOnInit(){
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slform.setValue({
          name: this.editedItem.name, amount: this.editedItem.amount
        })
      }
      ) 
    
  }
  
  onSubmit(form: NgForm){
    
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode)
    {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    else{
    this.slService.addIngredient(newIngredient);}
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slform.reset();
    this.editMode = false;
  }
  onDelete(){
    this.slService.deleteIngredients(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
