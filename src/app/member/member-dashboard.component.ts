import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Course } from '../models/course';
import { House } from '../models/house';
import { Skill } from '../models/skill';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ag-member-dashboard',
  templateUrl: './member-dashboard.component.html',
  styleUrls: ['./member-dashboard.component.css']
})
export class MemberDashboardComponent implements OnInit {
  selectedHouse: House;

  dashboard: any;

  houses: any;

  courses: any;
  selectedCourse: Course;
  selectedTeach: House;
  selectedVideo: Skill;
  videolink:any;
  user: Observable<any>;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  this.dashboardService.getUser().subscribe(
    data => {
      this.user = data;
    },
    error =>  console.log(<any>error));
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

  selectSkill(skill: Skill) {
    this.selectedVideo = skill;
    this.videolink = "member/video/videos%2Fnumberlines.mp4";
  }

  onSelect(house: House) {
  	this.selectedHouse = house;
  }
  
  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
