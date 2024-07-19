// mantenimiento.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mantenimiento } from '../models/mantenimiento.model';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
  private apiUrl = 'http://localhost:5000/api/mantenimientos';

  constructor(private http: HttpClient) {}

  // Método para obtener todos los mantenimientos
  getMantenimientos(): Observable<Mantenimiento[]> {
    return this.http.get<Mantenimiento[]>(this.apiUrl);
  }

  // Método para obtener un mantenimiento por su ID
  getMantenimientoById(id: string): Observable<Mantenimiento> {
    return this.http.get<Mantenimiento>(`${this.apiUrl}/${id}`);
  }

  // Método para crear un nuevo mantenimiento
  createMantenimiento(mantenimiento: Mantenimiento): Observable<Mantenimiento> {
    return this.http.post<Mantenimiento>(this.apiUrl, mantenimiento);
  }

  // Método para eliminar un mantenimiento por su ID
  deleteMantenimiento(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Método para obtener mantenimientos por fecha
  getMantenimientosByFecha(fecha: string): Observable<Mantenimiento[]> {
    return this.http.get<Mantenimiento[]>(`${this.apiUrl}/fecha?fecha=${fecha}`);
  }

  // Método para obtener mantenimientos por ID del técnico
  getMantenimientosByTecnicoId(tecnicoId: string): Observable<Mantenimiento[]> {
    return this.http.get<Mantenimiento[]>(`${this.apiUrl}/tecnico?numeroId=${tecnicoId}`);
  }

  // Método para obtener mantenimientos por ID del propietario
  getMantenimientosByPropietarioId(propietarioId: string): Observable<Mantenimiento[]> {
    return this.http.get<Mantenimiento[]>(`${this.apiUrl}/propietario?numeroId=${propietarioId}`);
  }

  // Método para obtener mantenimientos por placa del vehículo
  getMantenimientosByPlaca(placa: string): Observable<Mantenimiento[]> {
    return this.http.get<Mantenimiento[]>(`${this.apiUrl}/placa?placa=${placa}`);
  }

  // Método para verificar si un mantenimiento ya existe
  checkMantenimiento(mantenimiento: Mantenimiento): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/verificar`, mantenimiento);
  }
}
