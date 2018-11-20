import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { Email } from '../email';
@Component({
  selector: 'app-email-address',
  templateUrl: './email-address.component.html',
  styleUrls: ['./email-address.component.css']
})
export class EmailAddressComponent implements OnInit {

  emailAddress: string;
  pEmailAddress = new Email();
  showEmail: boolean = false;
  
  constructor(public personservice: PersonService) { }

  ngOnInit() {
  }

  onBlurMethod() {
    // if(typeof(this.emailAddress) == 'undefined' || (this.emailAddress).trim() == '') {
    //   this.showEmail = true;
    // }

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailAddress))) {
      this.showEmail = true;
    }

    else {
      this.pEmailAddress = this.personservice.parsePersonEmailAddress(this.emailAddress);
      this.showEmail = false;
    }
    }
  }
