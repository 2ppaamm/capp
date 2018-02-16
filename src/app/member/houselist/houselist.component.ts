import { Component, OnInit } from '@angular/core';
import { House } from '../../models/house';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'ag-houselist',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouselistComponent implements OnInit {
  houses: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  	this.houses = this.dashboardService.getDashboard();
  }

}