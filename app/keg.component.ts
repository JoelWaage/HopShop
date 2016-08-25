import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div class="list">
      <h2>{{ keg.name }}</h2>
      <h4>$ {{ keg.price }}</h4>
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
