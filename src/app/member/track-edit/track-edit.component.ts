import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../models/track';
import { TrackService } from '../../services/track.service';

@Component({
  selector: 'ag-track-edit',
  templateUrl: './track-edit.component.html',
  styleUrls: ['./track-edit.component.css']
})
export class TrackEditComponent implements OnInit {
  status: string;
  message: string;
  @Input() track:Track;
  fields: any;
  levels: any;
  statuses: any;

  constructor(private trackService:TrackService) { }

  ngOnInit() {
  	console.log(this.track);
    this.trackService.createTrack().subscribe(
      data => {
        this.fields = data['fields'];
        this.levels = data['levels'];
        this.statuses = data['statuses'];
      },
      error =>  console.log(<any>error)); 
  }

  updateTrack(track) {
  this.trackService.updateTrack(track)
    .subscribe(
      track  => {
        this.status = 'success';
        this.message = track['message'];
      },
      error => { 
        console.log(<any>error);
        this.status = 'success';
        this.message = error['message'];
      }
    );
  }

}
