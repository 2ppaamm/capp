import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CourseService {

    constructor(private http: HttpClient) { }

    getCourses() {
    	return this.http.get('http://localhost/courses').map((response) => response);
    }

}
