import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnDestroy {

  public id: number;
  private sub: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
