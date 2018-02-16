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

  houses: any;
  selectedHouse: House;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  	this.houses = this.dashboardService.getDashboard();
  }

  onSelect(house: House) {
	this.selectedHouse = house;
  }

}
