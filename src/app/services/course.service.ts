import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CourseService {

    constructor(private http: HttpClient) { }

    getCourses():Observable<any> {
    	return this.http.get('http://localhost/courses')
    	.map((response) => response)	      
    	.catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
    }
	addCourse(course: Object): Observable<Course[]> {
	    return this.http.post('http://localhost/courses', course)
	      .map((response) => response)
	      .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));
	}
}
