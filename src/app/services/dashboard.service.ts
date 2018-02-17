import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Dashboard } from '../models/dashboard';

@Injectable()
export class DashboardService {
  dashboard = new Dashboard ('Request successful');

  constructor(private http: HttpClient) { }

  //getDashboard(){
//  	return this.dashboard;
    //	console.log(this.http.get('http://localhost').map((response) => response));
    //	return this.dashboard;
  //}

  getDashboard(): Observable<any> {
  	return this.http.get('http://localhost/api/protected')
   	.map((response) => response['houses'])	      
   	.catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
  }

}
