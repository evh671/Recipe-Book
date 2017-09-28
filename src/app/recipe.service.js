"use strict";
var recipe_model_1 = require("./recipes/recipe.model");
var RecipeService = (function () {
    function RecipeService() {
        this.recipes = [
            new recipe_model_1.Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
            new recipe_model_1.Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        // return a new Copy Array of recipes
        return this.recipes.slice();
    };
    return RecipeService;
}());
exports.RecipeService = RecipeService;
