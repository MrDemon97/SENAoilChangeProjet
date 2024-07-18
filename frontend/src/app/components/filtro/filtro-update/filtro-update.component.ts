import { FiltroService } from './../../../services/filtro.service';
import { Component, Input } from '@angular/core';
import { Filtro } from '../../../models/filtro.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-filtro-update',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './filtro-update.component.html',
  styleUrls: ['./filtro-update.component.css']
})
export class FiltroUpdateComponent {
  @Input() filtro: Filtro | undefined;

  constructor(private filtroService: FiltroService) {}
  
  verificarYActualizarFiltro(): void {
    if (this.filtro) {
      // Verificar si el filtro ya existe por referencia
      this.filtroService.getFiltroByReferencia(this.filtro.referencia)
        .subscribe(
          (filtroEncontrado) => {
            if (filtroEncontrado && filtroEncontrado._id !== this.filtro?._id) {
              alert('El filtro con esta referencia ya existe.');
            } else {
              // Proceder con la actualización
              this.updateFiltro();
            }
          },
          (error) => {
            if (error instanceof HttpErrorResponse) {
              if (error.status === 404) {
                // Proceder con la actualización si no se encuentra el filtro
                this.updateFiltro();
              } else {
                alert('Error verificando el filtro.');
              }
            } else {
              alert('Error desconocido: ' + error.message);
            }
          }
        );
    }
  }

  updateFiltro(): void {
    if (this.filtro) {
      this.filtroService.updateFiltro(this.filtro._id, this.filtro)
        .subscribe(
          updatedFiltro => {
            this.filtro = updatedFiltro;
            alert('Filtro actualizado exitosamente.');
          },
          error => {
            alert('Error al actualizar el filtro.' + error.message);
          }
        );
    }
  }
}

