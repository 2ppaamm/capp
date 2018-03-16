import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../models/skill';
declare var jQuery:any;
declare var $ :any;

@Component({
  selector: 'ag-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {
  @Input() selectedVideo:Skill;

  constructor() { }

  ngOnInit() {
  }

  unSelect() {
    $('body').on('hidden.bs.modal', '.modal', function () {
      $('video').trigger('pause');
      });
    this.selectedVideo['lesson_link']=null;
  }

}
