import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MantenimientoService } from '../../../services/mantenimiento.service';
import { AceiteService } from '../../../services/aceite.service';
import { FiltroService } from '../../../services/filtro.service';
import { VehiculoService } from '../../../services/vehiculo.service';
import { Mantenimiento } from '../../../models/mantenimiento.model';

@Component({
  selector: 'app-mantenimiento-create',
  standalone: true,
  templateUrl: './mantenimiento-create.component.html',
  styleUrls: ['./mantenimiento-create.component.css'],
  imports: [CommonModule, ReactiveFormsModule] 
})
export class MantenimientoCreateComponent implements OnInit {
  mantenimientoForm!: FormGroup;
  aceites: any[] = [];
  filtros: any[] = [];
  vehiculos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private mantenimientoService: MantenimientoService,
    private aceiteService: AceiteService,
    private filtroService: FiltroService,
    private vehiculoService: VehiculoService
  ) {}

  ngOnInit(): void {
    this.mantenimientoForm = this.fb.group({
      vehiculo: this.fb.group({
        placa: ['', Validators.required],
        modelo: [{value: '', disabled: true}, Validators.required],
        propietario: this.fb.group({
          nombre: [{value: '', disabled: true}, Validators.required],
          numeroId: [{value: '', disabled: true}, Validators.required]
        })
      }),
      fecha: ['', Validators.required],
      kilometraje: ['', Validators.required],
      aceitesUsados: this.fb.group({
        aceiteUsado1: this.fb.group({
          referencia: ['', Validators.required],
          marca: [{value: '', disabled: true}, Validators.required],
          cantidad: ['', Validators.required]
        }),
        aceiteUsado2: this.fb.group({
          referencia: ['', Validators.required],
          marca: [{value: '', disabled: true}, Validators.required],
          cantidad: ['', Validators.required]
        })
      }),
      filtroAceite: this.fb.group({
        referencia: ['', Validators.required],
        marca: [{value: '', disabled: true}, Validators.required]
      }),
      filtroAire: this.fb.group({
        referencia: ['', Validators.required],
        marca: [{value: '', disabled: true}, Validators.required]
      }),
      tecnico: this.fb.group({
        nombre: ['', Validators.required],
        numeroId: ['', Validators.required]
      })
    });

    this.loadData();
  }

  loadData(): void {
    this.aceiteService.getAceites().subscribe(data => this.aceites = data);
    this.filtroService.getFiltros().subscribe(data => this.filtros = data);
    this.vehiculoService.getVehiculos().subscribe(data => this.vehiculos = data);
  }

  onSubmit(): void {
    const mantenimiento: Mantenimiento = this.mantenimientoForm.value;

    this.mantenimientoService.checkMantenimiento(mantenimiento).subscribe(exists => {
      if (exists) {
        alert('Ya existe un mantenimiento con estos datos.');
      } else {
        this.mantenimientoService.createMantenimiento(mantenimiento).subscribe(() => {
          alert('Mantenimiento creado exitosamente.');
          this.mantenimientoForm.reset();
        });
      }
    });
  }
}
