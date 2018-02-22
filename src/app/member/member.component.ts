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
  selectedHouse: House;

  dashboard: any;

  houses: any;

  courses: any;
  selectedCourse: Course;
  selectedTeach: House;
  
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  selectHouse(house: House) {
    this.selectedHouse = house;
  }

  selectTeach(house: House) {
    this.selectedTeach = house;
  }

  onSelect(house: House) {
  	this.selectedHouse = house;
  }
}
