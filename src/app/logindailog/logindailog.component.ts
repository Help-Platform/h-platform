import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logindailog',
  templateUrl: './logindailog.component.html',
  styleUrls: ['./logindailog.component.css']
})
export class LogindailogComponent implements OnInit {

  constructor(
    public activeModal: LogindailogComponent
  ) {}

  ngOnInit() {
  }

}
