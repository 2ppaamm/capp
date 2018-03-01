import { Component, OnInit, Input } from '@angular/core';
import { House } from '../../../models/house';
import { Chart } from 'chart.js';

@Component({
  selector: 'ag-teach-detail',
  templateUrl: './teach-detail.component.html',
  styleUrls: ['./teach-detail.component.css']
})
export class TeachDetailComponent implements OnInit {
  @Input() selectedTeach: any;
  chartdata: any;
  constructor() { }

  ngOnInit() {
  }
}