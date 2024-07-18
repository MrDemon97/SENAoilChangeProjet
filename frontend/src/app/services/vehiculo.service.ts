import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private baseUrl = 'http://localhost:5000/api/vehiculos';

  constructor(private http: HttpClient) { }

  // Método para obtener todos los vehículos
  getVehiculos(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Método para obtener todos los propietarios
  getPropietarios(): Observable<any> {
    return this.http.get(this.baseUrl + '/propietarios');
  }

  // Método para obtener un vehículo por su placa
  getVehiculoByPlaca(placa: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${placa}`);
  }

  // Método para obtener vehículos por número de ID del propietario
  getVehiculosByPropietarioId(numeroId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/propietario/${numeroId}`);
  }

  // Método para crear un nuevo vehículo
  createVehiculo(vehiculo: any): Observable<any> {
    return this.http.post(this.baseUrl, vehiculo);
  }

  // Método para actualizar un vehículo por su ID
  updateVehiculo(id: string, vehiculo: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, vehiculo);
  }

  // Método para eliminar un vehículo por su ID
  deleteVehiculo(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
