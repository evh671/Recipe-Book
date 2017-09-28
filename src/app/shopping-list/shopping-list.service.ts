import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
export class ShoppingListService
{
  private ingredients : Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10),
  ];

  // addIngredientPressed = new EventEmitter<Ingredient>();

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients()
  {
    return this.ingredients.slice();
  }

  addNewIngredient(newIngredient:Ingredient)
  {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
