import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../models/skill';

@Component({
  selector: 'ag-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  @Input() skill:Skill;

  constructor() { }

  ngOnInit() {
  }

  onVideo(skill: Skill) {
  	console.log(skill);
  }

}
