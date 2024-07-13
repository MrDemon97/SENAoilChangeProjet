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

  constructor(private mantenimientoService: MantenimientoService) {}

  ngOnInit() {
    // Obtener todos los mantenimientos
    this.mantenimientoService.getMantenimientos().subscribe(data => {
      this.mantenimientos = data;
    });

    // Obtener mantenimientos filtrados por nombre del técnico
    this.mantenimientoService.getMantenimientos({ tecnicoNombre: 'Juan Perez' }).subscribe(data => {
      console.log('Mantenimientos por técnico:', data);
    });
  }
}
