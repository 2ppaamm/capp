import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ag-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  user: Observable<any>;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  	this.user = this.dashboardService.getUser();
  }

}
