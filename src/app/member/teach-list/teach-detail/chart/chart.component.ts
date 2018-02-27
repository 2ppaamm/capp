import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() selectedTeach: any;
  chartdata = [350, 450, 100];
  // Doughnut
  public doughnutChartLabels:string[] = ['Excel', 'On_target', 'UnderPerform'];
  public doughnutChartData:number[] = this.chartdata;
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
