import { Injectable } from '@angular/core';


import { Name } from './name';
import { Mailing } from './mailing';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  value: string[] = [];
  pName = new Name();
  pAddress = new Mailing();
  constructor() {}
  
 
  parsePersonName(name: string): Name {

    this.value = name.split(' ');
    console.log(this.value);
    if(this.value.length > 0) {

      this.pName.firstName= this.value[0];
      this.pName.lastName = this.value[1];
      this.pName.middleName = this.value[2];
    }
 
    return this.pName;
    
  }

  parsePersonAddress(mailing: string): Mailing {
    
    this.value = mailing.split(' ');
    console.log(this.value);
    if(this.value.length > 0) {

      this.pAddress.houseNum = Number(this.value[0]);
      this.pAddress.streetName = this.value[1];

    }

    return this.pAddress;
  }


}
