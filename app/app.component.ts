import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <img src="./resources/images/wall.jpg" class="img-responsive wall">
    <div class="container">
      <div class="case">
        <img src="./resources/images/case.jpg" class="case">
      </div>
      <h1>Now Pouring:</h1>
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
      new Keg("3-Way IPA", "Fort George", "5.50", "7.3", 124),
      new Keg("90 Minute IPA", "Dogfish Head", "7.00", "9.0", 124),
      new Keg("Quasar Pale", "Ecliptic", "6.00", "6.0", 124),
      new Keg("Shark Attack Red", "Port Brewing", "5.50", "9.0", 124)
    ];
  }
  kegSelected(clickedKeg: Keg): void {
    console.log("parent", clickedKeg);
  }
}
