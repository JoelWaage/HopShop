import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form selected">
      <h3>Enter Tapped Keg:</h3>
      <input class="col-sm-6" placeholder="Name of Beer" #newName>
      <input class="col-sm-6" placeholder="Brewery" #newBrewery>
      <input class="col-sm-6" placeholder="Price Per Pint" #newPrice>
      <input class="col-sm-6" placeholder="ABV" #newABV>
      <button (click)="addKeg(newName, newBrewery, newPrice, newABV)"class="btn btn-info btn-sm">Add</button>
    </div>
    `
})
export class NewKegComponent{
  public onSubmitNewKeg: EventEmitter<String>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(tapName, tapBrewery, tapPrice, tapABV: HTMLInputElement){
    this.onSubmitNewKeg.emit(tapName.value);
    this.onSubmitNewKeg.emit(tapBrewery.value);
    this.onSubmitNewKeg.emit(tapPrice.value);
    this.onSubmitNewKeg.emit(tapABV.value);
  }
}
