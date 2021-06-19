import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Datos {
  facebook:             number;
  youtube:              number;
  whatsapp:             number;
  "facebook-messenger": number;
  instagram:            number;
}


@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  public baseUrl: string = `http://localhost:3000/grafica`

  constructor(
    private http:HttpClient
  ) { }

  obtenerDatosGrafica(): Observable<Datos>{
    return this.http.get<Datos>(`${ this.baseUrl }`);
  }

  getUsuariosRedesSocialesDonaData(){
    return this.obtenerDatosGrafica()
    .pipe(
      map( data => {
        const labels = Object.keys( data );
        const values  = Object.values( data );
        return { labels, values }
      })
    )
  }
}
