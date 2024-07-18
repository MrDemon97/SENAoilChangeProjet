import { Component, Input } from '@angular/core';
import { AceiteService } from '../../../services/aceite.service';
import { Aceite } from '../../../models/aceite.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-aceite-update', // Definición del selector del componente
  standalone: true, // El componente es independiente y no requiere un módulo externo
  imports: [CommonModule, FormsModule, HttpClientModule], // Importa módulos necesarios para formularios, manejo HTTP y funcionalidad común de Angular
  templateUrl: './aceite-update.component.html', // Archivo de plantilla HTML del componente
  styleUrls: ['./aceite-update.component.css'] // Archivo de estilos CSS del componente
})
export class AceiteUpdateComponent {
  @Input() aceite: Aceite | undefined; // Entrada del componente que recibe un objeto de tipo Aceite

  constructor(private aceiteService: AceiteService) {} // Constructor que inyecta el servicio AceiteService

  // Método para verificar y actualizar el aceite
  verificarYActualizarAceite(): void {
    if (this.aceite) { // Verifica si el objeto aceite está definido
      // Llama al servicio para buscar el aceite según sus características
      this.aceiteService.getAceiteBuscado(this.aceite.referencia, this.aceite.marca, this.aceite.presentacion, this.aceite.tipo)
        .subscribe(
          (aceiteEncontrado) => { // Si se encuentra un aceite
            if (aceiteEncontrado && aceiteEncontrado._id !== this.aceite?._id) {
              alert('El aceite ya existe.'); // Muestra una alerta si el aceite ya existe
            } else {
              // Si no se encuentra un aceite diferente con las mismas características, procede con la actualización
              this.updateAceite();
            }
          },
          (error) => { // Manejo de errores
            if (error instanceof HttpErrorResponse) {
              if (error.status === 404) {
                // Si no se encuentra el aceite, procede con la actualización
                this.updateAceite();
              } else {
                alert('Error verificando el aceite.'); // Muestra una alerta en caso de error al verificar
              }
            } else {
              alert('Error desconocido: ' + error.message); // Muestra una alerta en caso de error desconocido
            }
          }
        );
    }
  }

  // Método para actualizar el aceite
  updateAceite(): void {
    if (this.aceite) { // Verifica si el objeto aceite está definido
      this.aceiteService.updateAceite(this.aceite._id, this.aceite) // Llama al servicio para actualizar el aceite
        .subscribe(
          updatedAceite => {
            this.aceite = updatedAceite; // Actualiza el objeto aceite con la respuesta del servidor
            alert('Aceite actualizado exitosamente.'); // Muestra una alerta de éxito
          },
          error => {
            alert('Error al actualizar el aceite.' + error.message); // Muestra una alerta en caso de error
          }
        );
    }
  }
}
