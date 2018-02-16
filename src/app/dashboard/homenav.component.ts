import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ag-homenav',
  templateUrl: './homenav.component.html',
  styleUrls: ['./homenav.component.css']
})
export class HomenavComponent implements OnInit {

  constructor(private authService:AuthService) { }
 
  ngOnInit() {}

  public login(){
  	this.authService.login();
  }

  public logout(){
  	this.authService.logout();
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}