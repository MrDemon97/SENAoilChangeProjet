import { Component } from '@angular/core';
import { VehiculoService } from '../../../services/vehiculo.service';
import { Vehiculo } from '../../../models/vehiculo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vehiculo-create',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './vehiculo-create.component.html',
  styleUrls: ['./vehiculo-create.component.css']
})
export class VehiculoCreateComponent {

  // Nuevo objeto Vehiculo para el formulario
  nuevoVehiculo: Vehiculo = new Vehiculo();

  // Inyectamos el servicio VehiculoService en el constructor
  constructor(private vehiculoService: VehiculoService) {}

  // Método para crear un nuevo vehículo
  crearVehiculo(): void {
    this.vehiculoService.createVehiculo(this.nuevoVehiculo)
      .subscribe(() => {
        // Muestra un mensaje de éxito si la creación es exitosa
        alert('Vehículo creado exitosamente.');
      },
      (err) => {
        // Muestra un mensaje de error si ocurre algún problema
        alert('Error al crear el vehículo.');
      });
  }
}
