import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public login() {
    localStorage.setItem('username', this.username);
    this.router.navigate(['/main/categories']);
  }

}
