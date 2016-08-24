import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Tapped Keg</h3>
    <input placeholder="Name" class="col-sm-2" #newName>
    <input placeholder="Brewery" class="col-sm-2" #newBrewery>
    <input placeholder="Price" class="col-sm-2" #newPrice>
    <input placeholder="ABV" class="col-sm-2" #newABV>
    <button (click)="addKeg(newName, newBrewery, newPrice, newABV)" class="btn btn-info btn-xs">Tap</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(tapName: HTMLInputElement, tapBrewery: HTMLInputElement, tapPrice: HTMLInputElement, tapABV: HTMLInputElement){
    var newKeg = new Keg(tapName.value, tapBrewery.value, tapPrice.value, tapABV.value, 0);
    this.onSubmitNewKeg.emit(newKeg);
    tapName.value = "";
    tapBrewery.value = "";
    tapPrice.value = "";
    tapABV.value = "";
  }
}
