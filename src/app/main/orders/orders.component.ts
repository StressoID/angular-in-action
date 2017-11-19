import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {

  public data: any[] = [];
  public value: string;

  constructor(private orders: OrdersService) { }

  ngOnInit() { }

  public setData() {
    this.orders.getOrderById(this.value).subscribe(result => {
      this.data = [result];
    });
  }

}
