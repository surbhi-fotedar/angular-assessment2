import { Component, OnInit } from '@angular/core';

import { NameService } from '../name.service';
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
  showAreaCode: boolean = false;
  showPrefix: boolean = false;
  showActualNumber: boolean = false;

  constructor(public nameService: NameService) { }

  ngOnInit() {
  }

  onBlurMethod() {

    console.log(this.phoneNumber);
    console.log(typeof(this.phoneNumber));
    console.log(this.phoneNumber.length);
    console.log(typeof(this.phoneNumber.length));
    
    if(!(Number(this.phoneNumber))) {
      this.showNum = !this.showNum;
    }

    else if(this.phoneNumber.length !== 10){
      this.showAreaCode = !this.showAreaCode;

    }
    else {
      this.pNumber = this.nameService.parsePersonPhoneNumber(this.phoneNumber);
      this.phoneNumber = '('+ this.pNumber.areaCode + ') ' + this.pNumber.prefix + '-' +this.pNumber.actualNumber;   
      this.showAreaCode = false;  
    }
    }
    
  }
