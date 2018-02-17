import { Component, OnInit, Input } from '@angular/core';
import { House } from '../../models/house';

@Component({
  selector: 'ag-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
@Input() selectedHouse: House;

  constructor() { }

  ngOnInit() {
  }

}
