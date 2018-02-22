import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {
  
  constructor(private http: HttpClient) { }

  getHouses(): Observable<any> {
    return this.http.get('http://localhost/enrols/users')
    .map((response) => response['houses'])        
    .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
  }
  getCourses(): Observable<any> {
    return this.http.get('http://localhost/api/protected')
    .map((response) => response['courses'])        
    .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
  }
  getTeach(): Observable<any> {
    return this.http.get('http://localhost/enrols/teachers')
    .map((response) => response['houses'])        
    .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
  }

}
