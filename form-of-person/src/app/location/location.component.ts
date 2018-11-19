import { Component, OnInit } from '@angular/core';

import { NameService } from '../name.service';
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
  
  constructor(public nameService: NameService) { }

  ngOnInit() {
  }

  onBlurMethod(){
    if(typeof(this.location) === 'undefined') {
      this.showCity = !this.showCity;
    }
    else {
      this.pLocation = this.nameService.parsePersonLocation(this.location);
      if(typeof(this.pLocation.stateName) === 'undefined') {
        this.showState = !this.showState;
      }
      else if(!(this.pLocation.zipCode)) {
        this.showState = false;
        this.showZip = !this.showZip
      }
      else {
        this.showState = false;
        this.showZip = false;
      }
    }
  }

}
