import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../models/track';

@Component({
  selector: 'ag-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  @Input() track: Track;

  constructor() { }

  ngOnInit() {
  }

}
