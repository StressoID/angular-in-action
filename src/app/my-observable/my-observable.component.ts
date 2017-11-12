import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MyObservableService } from './my-observable.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-my-observable',
  templateUrl: './my-observable.component.html',
  styleUrls: ['./my-observable.component.css'],
})
export class MyObservableComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor(private myObservableService: MyObservableService) { }

  ngOnInit() {
    this.sub = this.myObservableService.getSubjects().subscribe(
      r => console.log(r),
      err => console.log(err),
      () => console.log('complete'),
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public observableCreate() {
    return Observable.create((observer) => {
      const arr = [1, 2, 3];
      arr.forEach(el => {
        observer.next(el);
        if (!el) {
          return Observable.throw('element not found');
        }
      });

      observer.complete();
    });
  }

}
