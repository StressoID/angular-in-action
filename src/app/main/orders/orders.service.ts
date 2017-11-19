import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';

@Injectable()
export class OrdersService {

  constructor(private httpService: HttpService) { }

  public getOrders() {
    return this.httpService.get('/orders');
  }

  public getOrderById(id: string) {
    return this.httpService.get(`/orders/${id}`);
  }

}
