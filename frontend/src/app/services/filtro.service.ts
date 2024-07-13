import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filtro } from '../models/filtro.model';;

@Injectable({
  providedIn: 'root'
})
export class FiltroService {
  private apiUrl = 'http://localhost:5000/api/filtros'; // URL de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener todos los filtros
  getFiltros(): Observable<Filtro[]> {
      return this.http.get<Filtro[]>(this.apiUrl);
  }

  // Método para crear un nuevo filtro
  createFiltro(filtro: Filtro): Observable<Filtro> {
      return this.http.post<Filtro>(this.apiUrl, filtro);
  }

  // Método para obtener un filtro por su referencia
  getFiltroByReferencia(referencia: string): Observable<Filtro> {
      return this.http.get<Filtro>(`${this.apiUrl}/${referencia}`);
  }

  // Método para actualizar un filtro por su referencia
  updateFiltro(referencia: string, filtro: Filtro): Observable<Filtro> {
      return this.http.put<Filtro>(`${this.apiUrl}/${referencia}`, filtro);
  }

  // Método para eliminar un filtro por su referencia
  deleteFiltro(referencia: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${referencia}`);
  }
}
