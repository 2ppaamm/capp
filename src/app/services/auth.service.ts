import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'eVJv6UFM9GVdukBWiURczRCxmb6iaUYG',
    domain: 'pamelalim.auth0.com',
    responseType: 'token id_token',
    audience: 'https://pamelalim.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200',
    scope: 'openid email firstname picture'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '/member';
        this.setSession(authResult);
        this.router.navigate(['/member']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  
  loggedIn() {
    return tokenNotExpired();
  }
}
