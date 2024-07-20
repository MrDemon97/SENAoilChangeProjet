import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MantenimientoService } from '../../../services/mantenimiento.service';
import { VehiculoService } from '../../../services/vehiculo.service'; // Servicio para obtener vehículos
import { AceiteService } from '../../../services/aceite.service'; // Servicio para obtener aceites
import { FiltroService } from '../../../services/filtro.service'; // Servicio para obtener filtros
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-mantenimiento-create',
  templateUrl: './mantenimiento-create.component.html',
  styleUrls: ['./mantenimiento-create.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class MantenimientoCreateComponent implements OnInit {
  mantenimientoForm!: FormGroup; //La propiedad "mantenimientoForm" no tiene inicializador y no está asignada de forma definitiva en el constructor.t
  vehiculos: any[] = [];
  aceites: any[] = [];
  filtros: any[] = [];

  constructor(
    private fb: FormBuilder,
    private mantenimientoService: MantenimientoService,
    private vehiculoService: VehiculoService,
    private aceiteService: AceiteService, 
    private filtroService: FiltroService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadOptions();
  }

  // Inicializar el formulario
  private initForm() {
    this.mantenimientoForm = this.fb.group({
      fecha: ['', Validators.required],
      kilometraje: ['', Validators.required],
      vehiculo: ['', Validators.required],
      aceite: this.fb.group({
        tipo1: ['', Validators.required],
        cantidadGalones: [0, Validators.required],
        cantidadCuartos: [0, Validators.required]
      }),
      filtro: this.fb.group({
        aire: ['', Validators.required],
        aceite: ['', Validators.required]
      }),
      tecnico: this.fb.group({
        numeroId: ['', Validators.required],
        nombre: ['', Validators.required]
      })
    });
  }

  // Cargar opciones para los desplegables
  private loadOptions() {
    this.vehiculoService.getVehiculos().subscribe(data => this.vehiculos = data);
    this.aceiteService.getAceites().subscribe(data => this.aceites = data);
    this.filtroService.getFiltros().subscribe(data => this.filtros = data);
  }

  // Enviar el formulario
  onSubmit() {
    if (this.mantenimientoForm.valid) {
      this.mantenimientoService.createMantenimiento(this.mantenimientoForm.value).subscribe(
        response => {
          console.log('Mantenimiento creado', response);
          // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
        },
        error => {
          console.error('Error al crear mantenimiento', error);
          // Aquí puedes mostrar un mensaje de error
        }
      );
    }
  }
}
