import { Component, OnInit } from '@angular/core';
import { AceiteService } from '../../../services/aceite.service';
import { Aceite } from '../../../models/aceite.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-aceite-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './aceite-search.component.html',
  styleUrl: './aceite-search.component.css'
})

export class AceiteSearchComponent {
  referencia = '';
  marca = '';
  presentacion: 'Galon 4L' | 'Galon 5L' | 'Cuarto Sellado' | 'Cuarto Granel' = 'Galon 4L';
  tipo: 'Sintético' | 'Semi' | 'Mineral' = 'Sintético';

  aceiteEncontrado: Aceite | undefined;

  constructor(private aceiteService: AceiteService) {}

  getAceiteBuscado(): void {
    this.aceiteService.getAceiteBuscado(this.referencia, this.marca, this.presentacion, this.tipo)
      .subscribe(
        (aceite) => {
          if (aceite) {
            alert('Aceite encontrado.');
            this.aceiteEncontrado = aceite;
          } else {
            alert('No se encontró el aceite.');
            this.aceiteEncontrado = undefined;
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 404) {
              alert('Filtro no encontrado.');
            } else {
              alert('Error buscando el aceite.');
            }
          } else {
            alert('Error desconocido: ' + error.message);
          }
          this.aceiteEncontrado = undefined;
        }
      );
  }    
}




