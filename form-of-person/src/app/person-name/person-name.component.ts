import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { Name } from '../name';



@Component({
  selector: 'app-person-name',
  templateUrl: './person-name.component.html',
  styleUrls: ['./person-name.component.css']
})

export class PersonNameComponent implements OnInit {

  fullName: any;
  pName = new Name();
  showFullName: boolean = false;
  showInvalidName: boolean = false;
  showLastName: boolean = false;
  
  constructor(public personservice: PersonService) { }

  ngOnInit() { }

  onBlurMethod() {

    if(typeof(this.fullName) === 'undefined' || (this.fullName).trim() == '') {
      this.showFullName = true;
    } 
    
    else if(/^[A-Za-z\s\.]*$/.test(this.fullName)) {
      this.pName = this.personservice.parsePersonName(this.fullName.trim());
        if(typeof(this.pName.lastName) === 'undefined' || (this.pName.lastName).trim() == '') {
          this.showFullName = false;
          this.showInvalidName = false;
          this.showLastName = true;
        }
        else {
          this.showFullName = false;
          this.showInvalidName = false;
          this.showLastName = false;
        }
    }
      else {
        this.showLastName = false;
        this.showInvalidName = true;
      } 
    } 
  }

