import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mantenimiento } from '../models/mantenimiento.model';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
  getFiltros(): Observable<import("../models/filtro.model").Filtro[]> {
    throw new Error('Method not implemented.');
  }
  getAceites(): Observable<import("../models/aceite.model").Aceite[]> {
    throw new Error('Method not implemented.');
  }
  getVehiculos(): Observable<import("../models/vehiculo.model").Vehiculo[]> {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:5000/api/mantenimientos';

  constructor(private http: HttpClient) {}

  getMantenimientos(filtros?: any): Observable<Mantenimiento[]> {
    let params = new HttpParams();
    if (filtros) {
      Object.keys(filtros).forEach(key => {
        if (filtros[key]) {
          params = params.append(key, filtros[key]);
        }
      });
    }
    return this.http.get<Mantenimiento[]>(this.baseUrl, { params });
  }

  createMantenimiento(mantenimiento: Mantenimiento): Observable<Mantenimiento> {
    return this.http.post<Mantenimiento>(this.baseUrl, mantenimiento);
  }
}
