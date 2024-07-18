import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../services/vehiculo.service';
import { Vehiculo } from '../../../models/vehiculo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoUpdateComponent } from "../vehiculo-update/vehiculo-update.component";

@Component({
  selector: 'app-vehiculo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, VehiculoUpdateComponent],
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  mostrarFormularioActualizar: boolean = false;
  vehiculoSeleccionado: Vehiculo | undefined;
  buscarPor: string = 'vehiculo'; // Opción por defecto
  propietarioId: string = ''; // ID del propietario para la búsqueda

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.getVehiculos();
  }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => (this.vehiculos = vehiculos));
  }

  deleteVehiculo(id: string): void {
    this.vehiculoService.deleteVehiculo(id).subscribe(
      () => {
        alert("Eliminado con éxito!");
        this.getVehiculos();
      },
      (error) => {
        alert("ERROR AL ELIMINAR");
        console.error('Error al eliminar vehículo', error);
      }
    );
  }

  actualizarVehiculo(vehiculo: Vehiculo): void {
    this.vehiculoSeleccionado = vehiculo;
    this.mostrarFormularioActualizar = true;
  }

  onVehiculoActualizado(): void {
    this.mostrarFormularioActualizar = false;
    this.getVehiculos(); // Refresca la lista de vehículos
  }

  listarPorVehiculo(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => (this.vehiculos = vehiculos));
  }

  listarPorPropietario(): void {
    if (this.propietarioId.trim() !== '') {
      this.vehiculoService.getVehiculosByPropietarioId(this.propietarioId).subscribe(
        (vehiculos) => {
          if (Array.isArray(vehiculos)) {
            this.vehiculos = vehiculos; // Asigna el arreglo completo de vehículos
          } else if (vehiculos instanceof Object) {
            this.vehiculos = [vehiculos]; // Convierte el objeto en un arreglo de un elemento
          } else {
            this.vehiculos = []; // Maneja el caso donde no se encontraron vehículos
          }
        },
        (error) => {
          alert("Error al buscar vehículos por propietario");
          console.error('Error al buscar vehículos por propietario', error);
          this.vehiculos = []; // Limpia la lista de vehículos en caso de error
        }
      );
    } else {
      alert("Por favor, ingrese un ID de propietario válido");
    }
  }

  buscar(): void {
    if (this.buscarPor === 'vehiculo') {
      this.listarPorVehiculo();
    } else if (this.buscarPor === 'propietario') {
      this.listarPorPropietario();
    }
  }
}
