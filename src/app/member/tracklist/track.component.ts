import { Component, OnInit,Input } from '@angular/core';
import { Track } from '../../models/track';

@Component({
  selector: 'ag-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
 
  @Input() track: Track;
  constructor() { }

  ngOnInit() {
  }

}