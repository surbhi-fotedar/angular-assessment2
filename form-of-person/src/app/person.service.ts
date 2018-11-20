import { Injectable } from '@angular/core';


import { Name } from './name';
import { Mailing } from './mailing';
import { Location } from './location';
import { PhoneNumber} from './phone-number';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  value: string[] = [];
  pName = new Name();
  pAddress = new Mailing();
  pLocation = new Location();
  pNumber = new PhoneNumber();
  pEmailAddress = new Email();

  constructor() {}
  
  parsePersonName(name: string): Name {

    this.value = name.split(' ');
    this.pName.firstName= this.value[0];
    this.pName.lastName = this.value[1];
    this.pName.middleName = this.value[2];
    
    return this.pName;
    
  }

  parsePersonAddress(mailing: string): Mailing {
    
    this.value = mailing.split(' ');
    this.pAddress.houseNum = this.value[0];
    this.pAddress.streetName = this.value[1];
    
    return this.pAddress;
  }

  parsePersonLocation(location: string): Location {

    this.value = location.split(' ');
    this.pLocation.cityName = this.value[0];
    this.pLocation.stateName = this.value[1];
    this.pLocation.zipCode = this.value[2];
    
    return this.pLocation;

  }

  parsePersonPhoneNumber(phoneNumber: string): PhoneNumber {

    this.pNumber.areaCode = phoneNumber.substr(0,3);
    this.pNumber.prefix = phoneNumber.substr(3,3);
    this.pNumber.actualNumber = phoneNumber.substr(6,4);

    return this.pNumber;
    
  }

  parsePersonEmailAddress(email: string): Email {

    this.pEmailAddress.emailName = email.substr(0,email.indexOf('@'));
    this.pEmailAddress.emailDomain = email.substr(email.indexOf('@')+1);
    
    return this.pEmailAddress;
  }


}
