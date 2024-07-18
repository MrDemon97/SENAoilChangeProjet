import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VehiculoService } from '../../../services/vehiculo.service';
import { Vehiculo } from '../../../models/vehiculo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-vehiculo-update', // Definición del selector del componente
  standalone: true, // El componente es independiente y no requiere un módulo externo
  imports: [CommonModule, FormsModule, HttpClientModule], // Importa módulos necesarios para formularios, manejo HTTP y funcionalidad común de Angular
  templateUrl: './vehiculo-update.component.html', // Archivo de plantilla HTML del componente
  styleUrls: ['./vehiculo-update.component.css'] // Archivo de estilos CSS del componente
})
export class VehiculoUpdateComponent {
  @Input() vehiculo: Vehiculo | undefined; // Entrada del componente que recibe un objeto de tipo Vehiculo
  @Output() vehiculoActualizado: EventEmitter<void> = new EventEmitter<void>(); // Evento para notificar que un vehículo ha sido actualizado

  constructor(private vehiculoService: VehiculoService) {} // Constructor que inyecta el servicio VehiculoService

  // Método para verificar y actualizar el vehículo
  verificarYActualizarVehiculo(): void {
    if (this.vehiculo) { // Verifica si el objeto vehiculo está definido
      // Llama al servicio para buscar el vehículo según sus características
      this.vehiculoService.getVehiculoByPlaca(this.vehiculo.placa)
        .subscribe(
          (vehiculoEncontrado) => { // Si se encuentra un vehículo
            if (vehiculoEncontrado && vehiculoEncontrado._id !== this.vehiculo?._id) {
              alert('El vehículo ya existe.'); // Muestra una alerta si el vehículo ya existe
            } else {
              // Si no se encuentra un vehículo diferente con las mismas características, procede con la actualización
              this.updateVehiculo();
            }
          },
          (error) => { // Manejo de errores
            if (error instanceof HttpErrorResponse) {
              if (error.status === 404) {
                // Si no se encuentra el vehículo, procede con la actualización
                this.updateVehiculo();
              } else {
                alert('Error verificando el vehículo.'); // Muestra una alerta en caso de error al verificar
              }
            } else {
              alert('Error desconocido: ' + error.message); // Muestra una alerta en caso de error desconocido
            }
          }
        );
    }
  }

  // Método para actualizar el vehículo
  updateVehiculo(): void {
    if (this.vehiculo) { // Verifica si el objeto vehiculo está definido
      this.vehiculoService.updateVehiculo(this.vehiculo._id, this.vehiculo) // Llama al servicio para actualizar el vehículo
        .subscribe(
          updatedVehiculo => {
            this.vehiculo = updatedVehiculo; // Actualiza el objeto vehiculo con la respuesta del servidor
            alert('Vehículo actualizado exitosamente.'); // Muestra una alerta de éxito
            this.vehiculoActualizado.emit(); // Emite el evento de vehículo actualizado
          },
          error => {
            alert('Error al actualizar el vehículo.' + error.message); // Muestra una alerta en caso de error
          }
        );
    }
  }
}
