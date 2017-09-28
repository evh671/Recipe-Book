import {Component, Output, EventEmitter} from '@angular/core';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html',

})

export class HeaderComponent {
  @Output() navigationClicked = new EventEmitter<string>();

  onNavigationClick(feature:string)
  {
    this.navigationClicked.emit(feature);
  }


}
