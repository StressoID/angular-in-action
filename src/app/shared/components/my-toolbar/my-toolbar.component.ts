import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {

  @Input() customTitle: string;
  @Input() customMenuIcon: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login-user']);
  }

}
