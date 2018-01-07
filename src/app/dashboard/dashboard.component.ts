import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'ag-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedCourse: Course;
  constructor() { }

  ngOnInit() {
  }

  selectCourse(course: Course) {
  	this.selectedCourse = course;
  }

}
