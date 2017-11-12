import { Injectable } from '@angular/core';

@Injectable()
export class MainService {

  private _testProp: string = 'test';

  get testProp()   {
    return this._testProp;
  }

  set testProp(value: string) {
    console.log(value);
    this._testProp = value;
  }

  constructor() { }

}
