import { Component, OnInit } from '@angular/core';
import { House } from '../../models/house';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'ag-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.houses = this.dashboardService.getDashboard();
  }

}