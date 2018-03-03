import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ag-memberinfo',
  templateUrl: './memberinfo.component.html',
  styleUrls: ['./memberinfo.component.css']
})
export class MemberinfoComponent implements OnInit {
  user: any;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  	this.user = this.dashboardService.getUser();
//  	console.log(this.user);
  }
}
