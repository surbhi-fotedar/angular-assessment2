import { Component, OnInit } from '@angular/core';

import { NameService } from '../name.service';
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
  showEmailName: boolean = false;
  showEmailDomain: boolean = false;
  
  constructor(public nameService: NameService) { }

  ngOnInit() {
  }

  onBlurMethod() {
    if(typeof(this.emailAddress) === 'undefined') {
      this.showEmail = !this.showEmail;
    }

    else if(this.emailAddress.search('@')){
        this.pEmailAddress = this.nameService.parsePersonEmailAddress(this.emailAddress);
        if(this.pEmailAddress.emailName === '') {
          this.showEmailName = !this.showEmailName;
        }
        else if(this.pEmailAddress.emailDomain === '') {
          this.showEmailName = false;
          this.showEmailDomain = !this.showEmailDomain;
        }
      else {
        this.showEmailName = false;
        this.showEmailDomain = false;
        this.showEmail = false;
      }
      }
      else {
        this.showEmail = false;
        this.showEmailName = !this.showEmailName;
      }
    }
  }
