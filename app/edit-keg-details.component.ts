import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form edit-form">
      <h3>Edit Keg: {{ keg.name }}</h3>
      <input [(ngModel)]="keg.name"/>
      <input [(ngModel)]="keg.brewery"/>
      <input [(ngModel)]="keg.price"/>
      <input [(ngModel)]="keg.abv"/>
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
