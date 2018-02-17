import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { House } from '../../models/house';
import { DashboardService } from '../../services/dashboard.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ag-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  dashboard: any;
  houses: Observable<House[]>;
  selectedHouse: House;

  @Output() selectedEvent: EventEmitter<House> = new EventEmitter<House>();
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.houses = this.dashboardService.getDashboard();
  }

  onSelect(house: House) {
  	this.selectedEvent.emit(house);
  }

}