import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aceite } from '../models/aceite.model'; // Asegúrate de que la ruta sea correcta

@Injectable({
    providedIn: 'root'
})
export class AceiteService {
    private apiUrl = 'http://localhost:5000/api/aceites'; // URL de tu API

    constructor(private http: HttpClient) {}

    // Método para obtener todos los aceites
    getAceites(): Observable<Aceite[]> {
        return this.http.get<Aceite[]>(this.apiUrl);
    }

    // Método para crear un nuevo aceite
    createAceite(aceite: Aceite): Observable<Aceite> {
        return this.http.post<Aceite>(this.apiUrl, aceite);
    }

    // Método para obtener un aceite por su referencia
    getAceiteByReferencia(referencia: string): Observable<Aceite> {
        return this.http.get<Aceite>(`${this.apiUrl}/${referencia}`);
    }

    // Método para actualizar un aceite por su referencia
    updateAceite(referencia: string, aceite: Aceite): Observable<Aceite> {
        return this.http.put<Aceite>(`${this.apiUrl}/${referencia}`, aceite);
    }

    // Método para eliminar un aceite por su referencia
    deleteAceite(referencia: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${referencia}`);
    }
}
