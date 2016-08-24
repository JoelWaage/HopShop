import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div class="list">
      <h3>{{ keg.name }}  -  $ {{ keg.price }}</h3>
      <ul>
        <li>Brewery: {{ keg.brewery }}</li>
        <li>ABV: {{ keg.abv }} %</li>
      </ul>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
}
