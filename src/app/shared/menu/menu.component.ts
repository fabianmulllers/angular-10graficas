import { Component, OnInit } from '@angular/core';

interface Menu{
  nombre:string;
  ruta: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li{
        cursor:pointer
      }
    `
  ]
})
export class MenuComponent implements OnInit {

  menuItem: Menu[] = [
    { nombre:'barras', ruta:'/graficas/barras'},
    { nombre:'barras doble', ruta:'/graficas/barras-doble'},
    { nombre:'dona', ruta:'/graficas/dona'},
    { nombre:'dona http', ruta:'/graficas/dona-http'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
