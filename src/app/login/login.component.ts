import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ag-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status: string;
  message: string;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login();
  }

}
