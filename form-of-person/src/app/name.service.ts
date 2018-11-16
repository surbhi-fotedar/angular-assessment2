import { Injectable } from '@angular/core';


import { Name } from './name';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  fullname: string[] = [];
  pName = new Name();
  constructor() {}
  
 
  parsePersonName(name: string): Name {

    this.fullname = name.split(' ');
    console.log(this.fullname);
    if(this.fullname.length > 0) {

      this.pName.firstName= this.fullname[0];
      this.pName.lastName = this.fullname[1];
      this.pName.middleName = this.fullname[2];
    }
 
    return this.pName;
    
  }
}
