import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../services/mantenimiento.service';
import { Mantenimiento, Aceite, Filtro } from '../../models/mantenimiento.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mantenimiento',
  standalone: true, // Indica que este componente es independiente y no necesita ser declarado en un módulo
  imports: [CommonModule, FormsModule, HttpClientModule], // Aquí puedes importar otros módulos o componentes que este componente necesite
  templateUrl: './mantenimiento.component.html', // Ruta al archivo de plantilla HTML de este componente
  styleUrls: ['./mantenimiento.component.css'] // Ruta al archivo de estilos CSS de este componente
})
export class MantenimientoComponent implements OnInit {
  mantenimientos: Mantenimiento[] = [];
  nuevoMantenimiento: Mantenimiento = new Mantenimiento();

  constructor(private mantenimientoService: MantenimientoService) {}

  ngOnInit() {
    this.getMantenimientos();
  }

  // Obtener todos los mantenimientos
  getMantenimientos() {
    this.mantenimientoService.getMantenimientos().subscribe(data => {
      this.mantenimientos = data;
    });
  }

  // Filtrar mantenimientos por criterios
  filtrarMantenimientos(tecnicoNombre: string, numeroIdPropietario: string, fecha: string, placaVehiculo: string) {
    const filtros = {
      tecnicoNombre: tecnicoNombre || undefined,
      numeroIdPropietario: numeroIdPropietario || undefined,
      fecha: fecha || undefined,
      placaVehiculo: placaVehiculo || undefined,
    };

    this.mantenimientoService.getMantenimientos(filtros).subscribe(data => {
      this.mantenimientos = data;
    });
  }

  // Agregar un nuevo mantenimiento
  agregarMantenimiento() {
    this.mantenimientoService.createMantenimiento(this.nuevoMantenimiento).subscribe(data => {
      console.log('Nuevo mantenimiento creado:', data);
      this.getMantenimientos(); // Actualizar la lista de mantenimientos
    });
  }
}
