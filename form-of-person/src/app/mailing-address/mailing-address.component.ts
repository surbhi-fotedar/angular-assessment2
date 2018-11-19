import { Component, OnInit } from '@angular/core';

import { NameService } from '../name.service';
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
  showVar: boolean = false;

  constructor(public nameService: NameService) { }

  ngOnInit() {
  }

  onBlurMethod(){
    if(typeof(this.address) === 'undefined') {
      this.showAddress = !this.showAddress;
    }
    else {
      this.pAddress = this.nameService.parsePersonAddress(this.address);
      if(typeof(this.pAddress.streetName) === 'undefined') {
        this.showVar = !this.showVar;
      }
      else {
        this.showVar = false;
      }
    }
  }
}
