import { Component, Input } from '@angular/core';
import { VehiculoService } from '../../../services/vehiculo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vehiculo-delete',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './vehiculo-delete.component.html',
  styleUrls: ['./vehiculo-delete.component.css']
})
export class VehiculoDeleteComponent {
  @Input() id: string | undefined; // Entrada para recibir el ID del vehículo a eliminar

  constructor(private vehiculoService: VehiculoService) {}

  // Método para eliminar un vehículo
  deleteVehiculo(): void {
    if (this.id) { // Verifica que el ID esté definido
      this.vehiculoService.deleteVehiculo(this.id)
        .subscribe(
          () => {
            alert('Vehículo eliminado exitosamente');
          },
          (error) => {
            alert('Error al eliminar el vehículo');
          }
        );
    }
  }
}
