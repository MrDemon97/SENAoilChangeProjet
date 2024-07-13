import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mantenimiento } from '../models/mantenimiento.model'; // Asegúrate de que la ruta sea correcta

@Injectable({
    providedIn: 'root'
})
export class MantenimientoService {
    private apiUrl = 'http://localhost:5000/api/mantenimientos'; // URL de tu API

    constructor(private http: HttpClient) {}

    // Método para obtener todos los mantenimientos, con filtros opcionales
    getMantenimientos(params?: any): Observable<Mantenimiento[]> {
        return this.http.get<Mantenimiento[]>(this.apiUrl, { params });
    }

    // Método para crear un nuevo mantenimiento
    createMantenimiento(mantenimiento: Mantenimiento): Observable<Mantenimiento> {
        return this.http.post<Mantenimiento>(this.apiUrl, mantenimiento);
    }
}
