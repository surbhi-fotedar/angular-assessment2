import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { Mailing } from '../mailing';

@Component({
  selector: 'app-mailing-address',
  templateUrl: './mailing-address.component.html',
  styleUrls: ['./mailing-address.component.css']
})

export class MailingAddressComponent implements OnInit {

  address: string;
  pAddress = new Mailing();
  showAddress: boolean = false;
  showHouseNum: boolean = false;
  showStreet: boolean = false;

  constructor(public personservice: PersonService) { }

  ngOnInit() {
  }

  onBlurMethod(){

    if(typeof(this.address) == 'undefined' || this.address.trim() == '') {
      this.showAddress = true;
    }
    else {
      this.pAddress = this.personservice.parsePersonAddress(this.address.trim());
      if(!(/^[0-9]+$/.test(this.pAddress.houseNum))) {
        this.showAddress = true;
      }
      else if(typeof(this.pAddress.streetName) == 'undefined' || this.pAddress.streetName.trim() == ''){
        this.showAddress = false;
        this.showStreet = true;
      }
      else {
        this.showStreet = false;
        this.showAddress = false;
      }
    }
  }
}
