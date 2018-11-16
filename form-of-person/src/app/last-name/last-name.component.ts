import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-name',
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.css']
})
export class LastNameComponent implements OnInit {

  
  @Input('showMsg') showMsg: Boolean;
  @Input('showAdrsMsg') showAdrsMsg: Boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
