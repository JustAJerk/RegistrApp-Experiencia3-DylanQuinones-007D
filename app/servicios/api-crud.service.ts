import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CodigoQR } from '../pages/interfaces/interfaces';
import { Clases } from '../pages/interfaces/interfaces';
import { ClaseEspecifica } from '../pages/interfaces/interfaces';
import { QR } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  BuscarQRId(id:number):Observable<CodigoQR>{
    return this.httpclient.get<CodigoQR>(`${environment.apiUrl}/codigosQR/?id=${id}`);
  }

  ListarClases():Observable<Clases>{
    return this.httpclient.get<Clases>(`${environment.apiUrl}/clases`);
  }

  CrearClase(newClase: ClaseEspecifica): Observable<ClaseEspecifica>{
    return this.httpclient.post<Clases>(`${environment.apiUrl}/clases`, newClase);
  }

  CrearQR(newQR: QR): Observable<QR>{
    return this.httpclient.post<CodigoQR>(`${environment.apiUrl}/codigosQR`, newQR);
  }
}
