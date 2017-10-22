import { Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansive-panel',
  templateUrl: './expansive-panel.component.html',
  styleUrls: ['./expansive-panel.component.css']
})
export class ExpansivePanelComponent implements OnInit {

  public active = false;

  @ContentChild('header') header: HTMLElement;
  @ContentChild('content') content: HTMLElement;

  constructor() { }

  ngOnInit() {
  }

  public toggle() {
    this.active = !this.active;
  }

}
