import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../models/track';

@Component({
  selector: 'ag-track-edit',
  templateUrl: './track-edit.component.html',
  styleUrls: ['./track-edit.component.css']
})
export class TrackEditComponent implements OnInit {
  @Input() track:Track;

  constructor() { }

  ngOnInit() {
  }

}
