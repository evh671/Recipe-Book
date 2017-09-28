import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private strArray : string[] = ['oranges','apples'];

  isRecipesNav:boolean=true;

  onHeaderNavClicked(navSelection:string)
  {
    if (navSelection!=='recipes')
    {
      this.isRecipesNav=false;
      this.strArray.push('bananas');
    }
    else
    {
      this.isRecipesNav=true;
      this.strArray.push('strawberries');
    }

  }

}
