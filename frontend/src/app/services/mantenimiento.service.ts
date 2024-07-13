import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mantenimiento } from '../models/mantenimiento.model';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
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
