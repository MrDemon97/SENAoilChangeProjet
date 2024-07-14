import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import { Vehiculo } from '../../models/vehiculo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vehiculo',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  nuevoVehiculo: Vehiculo = new Vehiculo();

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {
    this.getVehiculos();
  }

  // Método para obtener todos los vehículos
  getVehiculos() {
    this.vehiculoService.getVehiculos().subscribe((data: Vehiculo[]) => {
      this.vehiculos = data;
    });
  }

  // Método para crear un nuevo vehículo
  createVehiculo() {
    this.vehiculoService.createVehiculo(this.nuevoVehiculo).subscribe((data: any) => {
      console.log('Nuevo vehículo creado:', data);
      this.getVehiculos(); // Actualizar la lista de vehículos
    });
  }

  // Método para obtener un vehículo por su placa
  getVehiculoByPlaca(placa: string) {
    this.vehiculoService.getVehiculoByPlaca(placa).subscribe((data: any) => {
      console.log('Vehículo encontrado:', data);
    });
  }

  // Método para actualizar un vehículo por su placa
  updateVehiculo(placa: string) {
    this.vehiculoService.updateVehiculo(placa, this.nuevoVehiculo).subscribe((data: any) => {
      console.log('Vehículo actualizado:', data);
      this.getVehiculos(); // Actualizar la lista de vehículos
    });
  }

  // Método para eliminar un vehículo por su placa
  deleteVehiculo(placa: string) {
    this.vehiculoService.deleteVehiculo(placa).subscribe(() => {
      console.log('Vehículo eliminado');
      this.getVehiculos(); // Actualizar la lista de vehículos
    });
  }
}
