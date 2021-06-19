import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

    // Doughnut
    public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','Order'];
    public doughnutChartData: MultiDataSet = [
      [350, 450, 100,680],
      [50, 150, 120],
      [250, 130, 70],
    ];
    public doughnutChartType: ChartType = 'doughnut';

    public color: Color[] = [
      {
        backgroundColor:['#2819A8','#DB712C','#9A21DB','#41E82E','#88F230','#9A70E']
      },
      {
        backgroundColor:['#41E82E','#88F230','#9A70E','#2819A8','#DB712C','#9A21DB']
      },
      {
        backgroundColor:['#DB712C','#9A21DB','#41E82E','#88F230','#2819A8','#9A70E']
      },
    ]
    
  constructor() { }

  ngOnInit(): void {
  }

}
