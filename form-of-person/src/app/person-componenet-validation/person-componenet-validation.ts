import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-name',
  templateUrl: './person-componenet-validation.html',
  styleUrls: ['./person-componenet-validation.css']
})
export class PersonComponenetValidation implements OnInit {

  @Input('showLastNameMsg') showLastNameMsg: Boolean;
  @Input('showInvalidNameMsg') showInvalidNameMsg: Boolean;
  @Input('showStreetMsg') showStreetMsg: Boolean;
  @Input('showAdrsMsg') showAdrsMsg: Boolean;
  @Input('showFullNameMsg') showFullNameMsg: Boolean;
  @Input('showHouseNumMsg') showHouseNumMsg: Boolean;
  @Input('showcityMsg') showcityMsg: Boolean;
  @Input('showstateMsg') showstateMsg: Boolean;
  @Input('showzipNumMsg') showzipNumMsg: Boolean;
  @Input('showNumMsg') showNumMsg: Boolean;
  @Input('showNumLengthMsg') showNumLengthMsg: Boolean;
  @Input('showEmailMsg') showEmailMsg: Boolean;
 
  constructor() { }

  ngOnInit() {
  }

}

