import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { Datos, GraficasService } from '../../services/graficas.service';
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

    datos!: Datos;
    // Doughnut
    public doughnutChartLabels: Label[] = [
      // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales','Order'
    ];
    public doughnutChartData: MultiDataSet = [
      // [350, 450, 100,680],
      // [50, 150, 120],
      // [250, 130, 70],
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


  constructor(
    private graficasService: GraficasService
  ) { }

  ngOnInit(): void {

    // this.graficasService.obtenerDatosGrafica()
    //   .pipe(
    //     delay(1000)
    //   )
    //   .subscribe(
    //     datos => {
    //       const label = Object.keys( datos );
    //       const data  = Object.values( datos );
    //       this.doughnutChartLabels = label;
    //       this.doughnutChartData.push( data );
    //     }
    //   )

    this.graficasService.getUsuariosRedesSocialesDonaData()
    .pipe(
      delay(1500)
    )
    .subscribe(
      ({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData = values;
      }
    )
  }

}
