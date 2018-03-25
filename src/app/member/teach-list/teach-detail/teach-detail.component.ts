import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { House } from '../../../models/house';
import { Chart } from 'chart.js';
import { Skill } from '../../../models/skill';
declare var jQuery:any;
declare var $ :any;
import { TrackService } from '../../../services/track.service';

@Component({
  selector: 'ag-teach-detail',
  templateUrl: './teach-detail.component.html',
  styleUrls: ['./teach-detail.component.css']
})
export class TeachDetailComponent implements OnInit {
  @Output() selectedEvent: EventEmitter<House> = new EventEmitter<House>();
  @Output() selectedVideo: EventEmitter<Skill> = new EventEmitter<Skill>();
  @Input() selectedTeach: any;
  chartdata: any;
  addTrackOn: any = false;
  fields: any;
  levels: any;
  statuses: any;
  constructor(private trackService:TrackService) { }

  ngOnInit() {
  }

  unSelect(house: House) {
  	this.selectedEvent.emit(null);
  }

  onVideo(skill: Skill) {
    this.selectedVideo.emit(skill);
  }

  createTrack(){
    this.addTrackOn = this.addTrackOn ? false:true;
  }

  editTrack(track){
    alert("Trackedit");
  }
}