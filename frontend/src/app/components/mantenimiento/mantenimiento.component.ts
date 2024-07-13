import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../services/mantenimiento.service';
import { Mantenimiento } from '../../models/mantenimiento.model';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
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
