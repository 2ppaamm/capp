import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { House } from '../models/house';

@Injectable()
export class DashboardService {

  dashboard: any;
  courses: any;
  houses: any;
  constructor(private http: HttpClient) { }

  getDashboard():Observable<any> {
    return this.http.get('http://localhost/api/protected')
    .map((response) => response['houses']);  }
}
