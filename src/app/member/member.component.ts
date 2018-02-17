import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Course } from '../models/course';
import { House } from '../models/house';

@Component({
  selector: 'ag-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  dashboard: any;

  houses: any;
  selectedHouse: House;

  courses: any;
  selectedCourse: Course;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboard = this.dashboardService.getDashboard();
  	this.courses = this.dashboardService.getDashboard();
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  onSelect(house: House) {
  	this.selectedHouse = house;
  }

}
