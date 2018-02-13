import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
declare var jQuery:any;
declare var $ :any;

@Component({
  selector: 'ag-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  courses: any;
  selectedCourse: Course;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
  	this.courses = this.courseService.getCourses();
    console.log(this.courses);
  }

  selectCourse(course: Course) {
  	this.selectedCourse = course;
  }
}