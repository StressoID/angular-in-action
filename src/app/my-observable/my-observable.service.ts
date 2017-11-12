import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/from';
import { Http } from '@angular/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class MyObservableService {

  private mySubject$: Subject<any> = new BehaviorSubject(500);

  private mySubject1$: Subject<any> = new Subject();
  private mySubject2$: Subject<any> = new Subject();

  constructor(private http: Http) { }

  public setMySubject(data) {
    this.mySubject$.next(data);
  }

  public getMySubject() {
    return this.mySubject$;
  }

  public getSubjects() {
    return this.mySubject2$.flatMap(() => {
      return this.mySubject1$;
    });
  }

  public setSubjetcs(data1, data2) {
    this.mySubject1$.next(data1);
    this.mySubject2$.next(data2);
  }

}
