import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  };
  public doughnutChartLabels: Label[] = [
      'emergency',
      'done', 
      'pending',
      'todo',
    ];
  public doughnutChartData: SingleDataSet = [15,12,16,30];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Color[] = [
    { backgroundColor: [
      '#FF0000',
      '#FF8C00', 
      '#ffbf3a',  
      '#4e3dc8', 
    ] },
  ];
  constructor() {}
  ngOnInit(): void {
    
  }
}
