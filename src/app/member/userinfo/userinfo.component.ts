import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ag-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  
  @Input() user: any;
  constructor() { }

  ngOnInit() {}
}
