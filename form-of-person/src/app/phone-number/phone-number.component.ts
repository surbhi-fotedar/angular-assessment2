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
  showNumLength: boolean = false;
  
  constructor(public nameService: NameService) { }

  ngOnInit() {
  }

  onBlurMethod() {
    
    if(!(Number(this.phoneNumber))) {
      this.showNum = !this.showNum;
    }

    else if(this.phoneNumber.length !== 10){
      this.showNumLength = !this.showNumLength;

    }
    else {
      this.pNumber = this.nameService.parsePersonPhoneNumber(this.phoneNumber);
      this.phoneNumber = '('+ this.pNumber.areaCode + ') ' + this.pNumber.prefix + '-' +this.pNumber.actualNumber;   
      this.showNumLength = false;  
    }
    }
    
  }
