import { Component, Input, OnInit } from '@angular/core';
import { AceiteService } from '../../../services/aceite.service';
import { Aceite } from '../../../models/aceite.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-aceite-update',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './aceite-update.component.html',
  styleUrls: ['./aceite-update.component.css']
})
export class AceiteUpdateComponent {
  @Input() aceite: Aceite | undefined;

  constructor(private aceiteService: AceiteService) {}

  //reusamos el codigo de aceite searchcomponent
  verificarYActualizarAceite(): void {
    if (this.aceite) {
      // Verificar si el aceite ya existe
      this.aceiteService.getAceiteBuscado(this.aceite.referencia, this.aceite.marca, this.aceite.presentacion, this.aceite.tipo)
        .subscribe(
          (aceiteEncontrado) => {
            if (aceiteEncontrado && aceiteEncontrado._id !== this.aceite?._id) {
              alert('El aceite ya existe.');
            } else {
              // Proceder con la actualización
              this.updateAceite();
            }
          },
          (error) => {
            if (error instanceof HttpErrorResponse) {
              if (error.status === 404) {
                // Proceder con la actualización si no se encuentra el aceite
                this.updateAceite();
              } else {
                alert('Error verificando el aceite.');
              }
            } else {
              alert('Error desconocido: ' + error.message);
            }
          }
        );
    }
  }

  updateAceite(): void {
    if (this.aceite) {
      this.aceiteService.updateAceite(this.aceite._id, this.aceite)
        .subscribe(updatedAceite => {
          this.aceite = updatedAceite;
          alert('Aceite actualizado exitosamente.');
        },
        error => {
          alert('Error al actualizar el aceite.');
        });
    }
  }
}
