import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public myTestProp: string;

  constructor(private mainService: MainService) {
    this.myTestProp = this.mainService.testProp;
  }

  ngOnInit() {
  }

}
