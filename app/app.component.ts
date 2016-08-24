import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <img src="./resources/images/wall.jpg" class="img-responsive">
    <div class="container">
      <h1>Kegs:</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegSelected($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Dale's Pale Ale", "Oskar Blues", "5.50", "6.2", 0),
      new Keg("Space Dust", "Elysian", "6.50", "7.1", 1),
      new Keg("Semi-Sweet", "Seattle Cider", "7.00", "4.4", 2),
      new Keg("Lemon-Thyme", "Clementine", "6.50", "4.9", 3)
    ];
  }
  kegSelected(clickedKeg: Keg): void {
    console.log("parent", clickedKeg);
  }
}
