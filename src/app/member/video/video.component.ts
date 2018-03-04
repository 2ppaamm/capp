import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../../models/skill';

@Component({
  selector: 'ag-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {
  @Input() selectedVideo:Skill;
  @Output() outVideo: EventEmitter<Skill> = new EventEmitter<Skill>();

  constructor() { }

  ngOnInit() {
  }

  unSelect(skill: Skill) {
  	this.outVideo.emit(null);
  }

}
