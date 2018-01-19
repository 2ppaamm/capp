import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'ag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ag';
  constructor(public authService:AuthService){
      authService.handleAuthentication();
  }
}
