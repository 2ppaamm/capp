import { Component, OnInit } from '@angular/core';
import { CourseService} from '../../services/course.service';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ag-admin-course-create',
  templateUrl: './admin-course-create.component.html',
  styleUrls: ['./admin-course-create.component.css']
})
export class AdminCourseCreateComponent implements OnInit {
  status: string;
  message: string;
  selectedFile = null;
  constructor(private courseService: CourseService, private router:Router, private http:HttpClient) { }

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

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }
}
