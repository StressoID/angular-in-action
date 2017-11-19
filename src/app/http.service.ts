import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  private host = 'https://59f4a79d4e78aa00120ef45c.mockapi.io/';

  constructor(private http: HttpClient) { }

  public get(route): Observable<any> {
    return this.http.get(`${this.host}/${route}`);
  }

}
