import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-name',
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.css']
})
export class LastNameComponent implements OnInit {

  
  @Input('showMsg') showMsg: Boolean;
  @Input('showAdrsMsg') showAdrsMsg: Boolean;
  @Input('undefinedMsg') undefinedMsg: Boolean;
  @Input('showHouseNumMsg') showHouseNumMsg: Boolean;
  @Input('showcityMsg') showcityMsg: Boolean;
  @Input('showstateMsg') showstateMsg: Boolean;
  @Input('showzipNumMsg') showzipNumMsg: Boolean;
  @Input('showAreaMsg') showAreaMessage: Boolean;
  @Input('showNumMsg') showNumMsg: Boolean;
  @Input('showAreaMsg') showAreaMsg: Boolean;
  @Input('showPrefixMsg') showPrefixMsg: Boolean;
  @Input('showActualNumMsg') showActualNumMsg: Boolean;

  constructor() { }

  ngOnInit() {
  }

}

