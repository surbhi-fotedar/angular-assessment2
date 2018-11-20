import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { PhoneNumber } from '../phone-number';
@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {

  phoneNumber: string;
  pNumber = new PhoneNumber();
  showNum: boolean = false;
  showNumLength: boolean = false;
  
  constructor(public personservice: PersonService) { }

  ngOnInit() {
  }

  onBlurMethod() {
    
    if(!(/^[0-9]+$/.test(this.phoneNumber))) {
      this.showNum = true;
    }

    else if(this.phoneNumber.length !== 10){
      this.showNum = false;
      this.showNumLength = true;
    }
    else {
      this.pNumber = this.personservice.parsePersonPhoneNumber(this.phoneNumber);
      this.phoneNumber = '('+ this.pNumber.areaCode + ') ' + this.pNumber.prefix + '-' +this.pNumber.actualNumber;   
      this.showNum = false;
      this.showNumLength = false;  
    }
    }
    
  }
