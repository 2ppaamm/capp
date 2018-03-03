import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class DashboardService {
   user :any = new User ('1', 'Pamela Lim ', 'Pamela', 'Lim', '(782)-9866535', 'japher@singnet.com.sg', 0, '100','2000','1998-10-29','2017-11-30','2018-03-31','https://angularbooks.com/img/angular4/img1.jpg');


  constructor(private http: HttpClient) { }

  getHouses(): Observable<any> {
    return this.http.get('http://localhost/enrols/users')
    .map((response) => response['houses'])        
    .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
  }
  getCourses(): Observable<any> {
    return this.http.get('http://localhost/courses')
    .map((response) => response['courses'])        
    .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
  }
  getTeach(): Observable<any> {
    return this.http.get('http://localhost/enrols/teachers')
    .map((response) => response['houses'])        
    .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
  }

  getUser(): Observable<any> {
    return this.user;
//    return this.http.get('http://localhost/api/protected')
//    .map((response) => response)
//    .catch((error:any) => Observable.throw(error.json().error || {message: 'Server Error'}));;
  }

  getDashboard(): Observable<any> {
    return this.http.get('http://localhost/api/protected')
    .map((response) => response['data'])        
    .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
  }
}
