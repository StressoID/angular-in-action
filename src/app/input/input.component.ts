import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class SomeInputComponent implements OnInit {

  @Input() someProp: string;

  constructor() { }

  ngOnInit() {
  }

}
