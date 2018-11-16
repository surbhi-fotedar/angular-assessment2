import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-name',
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.css']
})
export class LastNameComponent implements OnInit {

  validMessage: string='last name required';
  @Input() showMsg: Boolean;
  constructor() { }

  ngOnInit() {
  }

}
