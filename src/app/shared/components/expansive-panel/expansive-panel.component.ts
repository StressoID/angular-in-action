import { Component, ContentChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TestComponent } from '../../../test/test.component';
import { MyObservableService } from '../../../my-observable/my-observable.service';

@Component({
  selector: 'app-expansive-panel',
  templateUrl: './expansive-panel.component.html',
  styleUrls: ['./expansive-panel.component.css'],
})
export class ExpansivePanelComponent implements OnInit {

  public active = false;
  private i = 0;
  private k = 0;

  @ContentChild('header') header: HTMLElement;
  @ContentChild('content') content: HTMLElement;

  constructor(private matDialog: MatDialog, private myObservableService: MyObservableService) { }

  ngOnInit() { }

  public toggle() {
    this.active = !this.active;
  }

  openModal() {
    this.matDialog.open(TestComponent, { data: { name: 'angular in action' } });
  }

  add() {
    this.myObservableService.setSubjetcs(`${this.i}i`, `${this.k}k`);
    this.k--;
    this.i++;
  }

}
