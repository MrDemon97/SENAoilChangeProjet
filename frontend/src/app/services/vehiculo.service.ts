import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private url = 'http://localhost:5000/vehiculos';

  constructor(private http: HttpClient) { }

  //Metodo para obtener todos los vehiculos
  getVehiculos(): Observable<any> {
    return this.http.get(this.url);
  }

  //Metodo para crear un nuevo vehiculo
  createVehiculo(vehiculo: any): Observable<any> {
    return this.http.post(this.url, vehiculo);
  }

  // Metodo para optener un vehiculo por su placa
  getVehiculoByPlaca(placa: string): Observable<any> {
    return this.http.get(this.url + '/' + placa);
  }

  //Metodo para actualizar un vehiculo por su placa
  updateVehiculo(placa: string, vehiculo: any): Observable<any> {
    return this.http.put(this.url + '/' + placa, vehiculo);
  }

  //Metodo para elimiar un vehiculo por su placa
  deleteVehiculo(placa: string): Observable<any> {
    return this.http.delete(this.url + '/' + placa);
  }
}
