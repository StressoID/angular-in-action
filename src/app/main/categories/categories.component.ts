import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {

  public categories = [
    { title: 'phones', id: 15 },
    { title: 'gadgets', id: 16 },
    { title: 'pads', id: 17 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
