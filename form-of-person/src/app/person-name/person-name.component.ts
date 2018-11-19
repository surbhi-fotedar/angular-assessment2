import { Component, OnInit } from '@angular/core';

import { NameService } from '../name.service';
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
  letters = /^[A-Za-z\s\.]*$/;
  constructor(public nameService: NameService) { }

  ngOnInit() { }

  onBlurMethod() {

    if(typeof(this.fullName) === 'undefined') {
      this.showFullName = !this.showFullName;
    } 
    
    else if(this.letters.test(this.fullName)) {
      this.pName = this.nameService.parsePersonName(this.fullName);
        if(typeof(this.pName.lastName) === 'undefined') {
          this.showInvalidName = false;
          this.showLastName = !this.showLastName;
        }
        else {
          this.showInvalidName = false;
          this.showLastName = false;
        }
    }
      else {
        this.showLastName = false;
        this.showInvalidName = !this.showInvalidName;
      } 
    } 
  }

