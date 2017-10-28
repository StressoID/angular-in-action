import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  public inputValue = '';
  @Output() someValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setValue() {
    this.someValue.emit(this.inputValue);
  }

}
