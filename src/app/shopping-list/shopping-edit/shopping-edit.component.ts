import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // Capturing the Input of Name and Amount Text Boxes!
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  // An Event raised each time the "Add" Button is clicked
  // @Output() addIngredientPressed = new EventEmitter<Ingredient>();

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient()
  {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
                                         this.amountInputRef.nativeElement.value);

    this.shoppinglistService.addNewIngredient(newIngredient);



  }
}
