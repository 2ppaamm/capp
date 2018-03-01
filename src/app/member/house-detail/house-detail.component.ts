import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { House } from '../../models/house';

@Component({
  selector: 'ag-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
@Input() selectedHouse: House;

  @Output() selectedEvent: EventEmitter<House> = new EventEmitter<House>();
  constructor() { }

  ngOnInit() {
  }

  unSelect(house: House) {
  	this.selectedEvent.emit(null);
  }

}
