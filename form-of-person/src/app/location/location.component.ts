import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { Location } from '../location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  location: string;
  pLocation = new Location();
  showCity: boolean = false;
  showState: boolean = false;
  showZip: boolean = false;
  
  constructor(public personservice: PersonService) { }

  ngOnInit() {
  }

  onBlurMethod() {
    if(typeof(this.location) === 'undefined' || this.location.trim() == '' ) {
      this.showCity = true;
    }
    else {
      this.pLocation = this.personservice.parsePersonLocation(this.location.trim());
      if(typeof(this.pLocation.stateName) === 'undefined' || (this.pLocation.stateName).trim() == '') {
        this.showCity = false;
        this.showState = true;
      }
      else if((/^[0-9]+$/.test(this.pLocation.zipCode))) {
        if(this.pLocation.zipCode.length == 6) {
          this.showState = false;
          this.showZip = false;
        }

        else {
          this.showState = false;
          this.showZip = true;
        }
        
      }
      else {
        this.showCity = false;
        this.showState = false;
        this.showZip = true;
      }
    }
  }
}
