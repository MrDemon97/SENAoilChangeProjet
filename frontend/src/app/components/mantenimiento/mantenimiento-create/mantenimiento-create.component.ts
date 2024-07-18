import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Aceite } from '../../../models/aceite.model'; 
import { Filtro } from '../../../models/filtro.model'; 
import { Vehiculo } from '../../../models/vehiculo.model';
import { MantenimientoService } from '../../../services/mantenimiento.service';

@Component({
  selector: 'app-mantenimiento-create',
  templateUrl: './mantenimiento-create.component.html',
  styleUrls: ['./mantenimiento-create.component.css']
})
export class MantenimientoCreateComponent implements OnInit {
  mantenimientoForm: FormGroup;
  vehiculos$: Observable<Vehiculo[]>;
  aceites$: Observable<Aceite[]>;
  filtrosAceite$: Observable<Filtro[]>;
  filtrosAire$: Observable<Filtro[]>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private mantenimientoService: MantenimientoService
  ) {
    // Inicialización de propiedades en el constructor
    this.mantenimientoForm = this.formBuilder.group({});
    this.vehiculos$ = new Observable<Vehiculo[]>();
    this.aceites$ = new Observable<Aceite[]>();
    this.filtrosAceite$ = new Observable<Filtro[]>();
    this.filtrosAire$ = new Observable<Filtro[]>();
  }

  ngOnInit(): void {
    this.initForm();
    this.loadOptions();
  }

  initForm(): void {
    this.mantenimientoForm = this.formBuilder.group({
      placa: ['', Validators.required],
      fecha: [new Date(), Validators.required],
      kilometraje: ['', Validators.required],
      aceiteUtilizado: ['', Validators.required],
      filtroAceite: ['', Validators.required],
      filtroAire: ['', Validators.required],
      tecnicoNombre: ['', Validators.required],
      tecnicoNumeroId: ['', Validators.required]
    });
  }

  loadOptions(): void {
    this.vehiculos$ = this.mantenimientoService.getVehiculos();
    this.aceites$ = this.mantenimientoService.getAceites();
    this.filtrosAceite$ = this.mantenimientoService.getFiltros();
    this.filtrosAire$ = this.mantenimientoService.getFiltros();
  }

  onSubmit(): void {
    if (this.mantenimientoForm.valid) {
      const formData = this.mantenimientoForm.value;
      this.mantenimientoService.createMantenimiento(formData).subscribe(() => {
        this.router.navigate(['/mantenimientos']);
      });
    }
  }
}
