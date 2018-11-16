import { Component, OnInit } from '@angular/core';

import { NameService } from '../name.service';
import { Name } from '../name';



@Component({
  selector: 'app-person-name',
  templateUrl: './person-name.component.html',
  styleUrls: ['./person-name.component.css']
})

export class PersonNameComponent implements OnInit {

  fullName: string;
  pName = new Name();
  showVar: boolean = false;

  constructor(public nameService: NameService) { }

  ngOnInit() { }

  onBlurMethod(){
    this.pName = this.nameService.parsePersonName(this.fullName);
    
    if(typeof(this.pName.lastName) === 'undefined') {
      this.showVar = !this.showVar;
    }
  }
}
