import { Component, OnInit } from '@angular/core';
import { Track } from '../../models/track';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'ag-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {
tracks: Track[] = [
  new Track('1', 'First Track', 'First Track description', '1','https://angularbooks.com/img/angular4/img1.jpg', '3','1','2'),
  new Track('2', 'Second Track', 'Second Track description', '1', 'https://angularbooks.com/img/angular4/img2.jpg', '3','1','2'),
  new Track('3', 'Third Track', 'Third Track description', '1', 'https://angularbooks.com/img/angular4/img3.jpg', '3','1','2'),
  new Track('4', 'Fourth Track', 'Fourth Track description', '1', 'https://angularbooks.com/img/angular4/img4.jpg', '3','1','2'),
  new Track('5', 'Fifth Track', 'Fifth Track description', '1', 'https://angularbooks.com/img/angular4/img5.jpg', '3','1','2'),
  new Track('6', 'Sixth Track', 'Sixth Track description', '1', 'https://angularbooks.com/img/angular4/img6.jpg', '3','1','2'),
  new Track('7', 'Seventh Track', 'Seventh Track description', '1', 'https://angularbooks.com/img/angular4/img7.jpg', '3','1','2'),
  new Track('8', 'Eighth Track', 'Eighth Track description', '1', 'https://angularbooks.com/img/angular4/img8.jpg', '3','1','2'),
];
  constructor() { }

  ngOnInit() {
  }
}
