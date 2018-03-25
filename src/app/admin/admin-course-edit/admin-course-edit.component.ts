import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'ag-admin-course-edit',
  templateUrl: './admin-course-edit.component.html',
  styleUrls: ['./admin-course-edit.component.css']
})
export class AdminCourseEditComponent implements OnInit, OnDestroy {
  status: string;
  message: string;
  id: any;
  params: any;

  course = new Course('id', 'course', 'description', 'image', 'start_maxile_score', 'end_maxile_score');

  constructor(private activatedRoute:ActivatedRoute, private courseService:CourseService) { }

  ngOnInit() {
    this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.courseService.getCourse(this.id).subscribe(
	  data => {
	    this.course = data;
	  },
	  error =>  console.log(<any>error));
  }

  ngOnDestroy() {
    this.params.unsubscribe();
  }

  updateCourse(course) {
  this.courseService.updateCourse(course)
    .subscribe(
      course  => {
        this.status = 'success';
        this.message = course['message'];
      },
      error => { 
        console.log(<any>error);
        this.status = 'success';
        this.message = error['message'];
      }
    );
  }
}
