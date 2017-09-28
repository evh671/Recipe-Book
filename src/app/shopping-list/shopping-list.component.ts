import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {
  // ingredients : Ingredient[] = [
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatoes',10),
  // ];

  ingredients : Ingredient[];


  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {

    this.ingredients = this.shoppinglistService.getIngredients();

    this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe:Recipe) => {
    //     this.recipeSelected = recipe;
    //   }
    // );
  }

  // addNewIngredient(newIngredient:Ingredient)
  // {
  //   this.ingredients.push(newIngredient);
  // }
}
