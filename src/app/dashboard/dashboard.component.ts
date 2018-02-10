import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { Dashboard } from '../models/dashboard';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'ag-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboard: any;
  selectedCourse: Course;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  	this.dashboard = this.dashboardService.getDashboard();
    console.log(this.dashboard);
  }

  selectCourse(course: Course) {
  	this.selectedCourse = course;
  }

}
