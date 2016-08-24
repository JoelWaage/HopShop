export class Keg {
  public tapped: boolean = false;
  constructor(public name: string, public brewery: string, public price: string, public abv: string, public id: number) {
  }
}
