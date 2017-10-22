import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {

  @Input() customTitle: string;
  @Input() customMenuIcon: string;

  constructor() { }

  ngOnInit() {
  }

}
