import { Component, OnInit } from '@angular/core';
import { CourseService} from '../../services/course.service';
import { Router} from '@angular/router';

@Component({
  selector: 'ag-admin-course-create',
  templateUrl: './admin-course-create.component.html',
  styleUrls: ['./admin-course-create.component.css']
})
export class AdminCourseCreateComponent implements OnInit {
  status: string;
  message: string;

  constructor(private courseService: CourseService, private router:Router) { }

  ngOnInit() {
  }
  createCourse(course) {
   this.courseService.addCourse(course)
   .subscribe(
     course  => {
       this.router.navigate(['/admin/courses']);
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
