import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aceite } from '../models/aceite.model';

@Injectable({
    providedIn: 'root'
})
export class AceiteService {
    private apiUrl = 'http://localhost:5000/api/aceites'; 

    constructor(private http: HttpClient) {}

    // Método para obtener todos los aceites
    getAceites(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    //Obtener un aceite por sus parametros
    getAceiteBuscado(referencia: string, marca: string, presentacion: string, tipo: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/buscar?referencia=${referencia}&marca=${marca}&presentacion=${presentacion}&tipo=${tipo}`);
      }

    // Método para crear un nuevo aceite
    createAceite(aceite: Aceite): Observable<Aceite> {
        return this.http.post<Aceite>(this.apiUrl, aceite);
    }

    // Método para actualizar un aceite por su ID
    updateAceite(id: string, aceite: any): Observable<any>{
        return this.http.put(`${this.apiUrl}/${id}`, aceite);
    }
    
    //Eliminar un aceite por su ID
    deleteAceite(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
