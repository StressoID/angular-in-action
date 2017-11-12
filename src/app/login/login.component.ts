import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  public login() {
    this.localStorageService.setItem('username', this.username);
    this.router.navigate(['/main/categories']);
  }

}
