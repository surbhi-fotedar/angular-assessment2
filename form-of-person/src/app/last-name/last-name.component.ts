import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-name',
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.css']
})
export class LastNameComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}

