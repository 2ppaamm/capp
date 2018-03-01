import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { House } from '../../../models/house';
import { Chart } from 'chart.js';

@Component({
  selector: 'ag-teach-detail',
  templateUrl: './teach-detail.component.html',
  styleUrls: ['./teach-detail.component.css']
})
export class TeachDetailComponent implements OnInit {
  @Input() selectedTeach: any;
  @Output() selectedEvent: EventEmitter<House> = new EventEmitter<House>();
  chartdata: any;
  constructor() { }

  ngOnInit() {
  }

  unSelect(house: House) {
  	this.selectedEvent.emit(null);
  }
}