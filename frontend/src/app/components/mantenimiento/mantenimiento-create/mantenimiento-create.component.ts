import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MantenimientoService } from '../../../services/mantenimiento.service';
import { VehiculoService } from '../../../services/vehiculo.service';
import { AceiteService } from '../../../services/aceite.service';
import { FiltroService } from '../../../services/filtro.service';
import { CommonModule } from '@angular/common';
import { debounceTime } from 'rxjs';
import { catchError, of } from 'rxjs';

// Definir constantes para cadenas mágicas
/* const AIRE = 'aire';
const ACEITE = 'aceite';
const TIPO1 = 'tipo1';
const TIPO2 = 'tipo2'; */

@Component({
  standalone: true,
  selector: 'app-mantenimiento-create',
  templateUrl: './mantenimiento-create.component.html',
  styleUrls: ['./mantenimiento-create.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class MantenimientoCreateComponent implements OnInit {
  mantenimientoForm: FormGroup; // Inicializado en el constructor
  vehiculos: any[] = [];
  aceites: any[] = [];
  filtros: any[] = [];

  constructor(
    private fb: FormBuilder,
    private mantenimientoService: MantenimientoService,
    private vehiculoService: VehiculoService,
    private aceiteService: AceiteService,
    private filtroService: FiltroService
  ) {
    this.mantenimientoForm = this.fb.group({}); // Inicialización en el constructor
  }

  ngOnInit(): void {
    this.initForm();
    this.loadOptions();
  }

  private initForm() {
    this.mantenimientoForm = this.fb.group({
      fecha: ['', Validators.required], // Campo para la fecha del mantenimiento
      kilometraje: ['', Validators.required], // Campo para el kilometraje del mantenimiento
      vehiculo: this.fb.group({
        placa: ['', Validators.required], // Campo para la placa del vehículo
        marca: [''], // Campo para la marca del vehículo, solo lectura
        modelo: [''], // Campo para el modelo del vehículo, solo lectura
        anio: [''], // Campo para el año del vehículo, solo lectura
        propietario: this.fb.group({
          nombre: [''], // Campo para el nombre del propietario, solo lectura
          numeroId: [''] // Campo para el número de ID del propietario, solo lectura
        })
      }),
      aceite: this.fb.group({
        tipo1: this.fb.group({
          referencia: ['', Validators.required], // Campo para la referencia del aceite tipo 1
          marca: [''], // Campo para la marca del aceite tipo 1, solo lectura
          presentacion: [''], // Campo para la presentación del aceite tipo 1, solo lectura
          tipo: [''], // Campo para el tipo del aceite tipo 1, solo lectura
          cantidad: [0, Validators.required] // Campo para la cantidad del aceite tipo 1
        }),
        tipo2: this.fb.group({
          referencia: [''], // Campo para la referencia del aceite tipo 2
          marca: [''], // Campo para la marca del aceite tipo 2, solo lectura
          presentacion: [''], // Campo para la presentación del aceite tipo 2, solo lectura
          tipo: [''], // Campo para el tipo del aceite tipo 2, solo lectura
          cantidad: [0] // Campo para la cantidad del aceite tipo 2
        })
      }),
      filtro: this.fb.group({
        aire: this.fb.group({
          referencia: ['', Validators.required], // Campo para la referencia del filtro de aire
          marca: [''], // Campo para la marca del filtro de aire, solo lectura
          tipo: [''] // Campo para el tipo del filtro de aire, solo lectura
        }),
        aceite: this.fb.group({
          referencia: ['', Validators.required], // Campo para la referencia del filtro de aceite
          marca: [''], // Campo para la marca del filtro de aceite, solo lectura
          tipo: [''] // Campo para el tipo del filtro de aceite, solo lectura
        })
      }),
      tecnico: this.fb.group({
        numeroId: ['', Validators.required], // Campo para el número de ID del técnico
        nombre: ['', Validators.required] // Campo para el nombre del técnico
      })
    });

    this.setupAutoComplete();
  }

  private setupAutoComplete() {
    // Configurar autocompletado para los campos del formulario
    this.mantenimientoForm.get('vehiculo.placa')?.valueChanges
      .pipe(debounceTime(300))
      .subscribe(placa => this.autoCompleteVehiculo(placa));

    this.mantenimientoForm.get('aceite.tipo1.referencia')?.valueChanges
      .pipe(debounceTime(300))
      .subscribe(referencia => this.autoCompleteAceiteTipo1(referencia));

    this.mantenimientoForm.get('aceite.tipo2.referencia')?.valueChanges
      .pipe(debounceTime(300))
      .subscribe(referencia => this.autoCompleteAceiteTipo2(referencia));

    this.mantenimientoForm.get('filtro.aire.referencia')?.valueChanges
      .pipe(debounceTime(300))
      .subscribe(referencia => this.autoCompleteFiltroAire(referencia));

    this.mantenimientoForm.get('filtro.aceite.referencia')?.valueChanges
      .pipe(debounceTime(300))
      .subscribe(referencia => this.autoCompleteFiltroAceite(referencia));
  }

  private autoCompleteVehiculo(placa: string) {
    const vehiculo = this.vehiculos.find(v => v.placa === placa);
    if (vehiculo) {
      this.mantenimientoForm.patchValue({
        vehiculo: {
          marca: vehiculo.modelo.marca,
          modelo: vehiculo.modelo.serie,
          anio: vehiculo.modelo.ano,
          propietario: {
            nombre: vehiculo.propietario.nombre,
            numeroId: vehiculo.propietario.numeroId
          }
        }
      }, { emitEvent: false });
    } else {
      console.error('Vehículo no encontrado para la placa:', placa);
    }
  }

  private autoCompleteAceiteTipo1(referencia: string) {
    const aceite = this.aceites.find(a => a.referencia === referencia);
    if (aceite) {
      this.mantenimientoForm.patchValue({
        aceite: {
          tipo1: {
            marca: aceite.marca,
            presentacion: aceite.presentacion,
            tipo: aceite.tipo
          }
        }
      }, { emitEvent: false });
    } else {
      console.error('Aceite tipo 1 no encontrado para la referencia:', referencia);
    }
  }

  private autoCompleteAceiteTipo2(referencia: string) {
    const aceite = this.aceites.find(a => a.referencia === referencia);
    if (aceite) {
      this.mantenimientoForm.patchValue({
        aceite: {
          tipo2: {
            marca: aceite.marca,
            presentacion: aceite.presentacion,
            tipo: aceite.tipo
          }
        }
      }, { emitEvent: false });
    } else {
      console.error('Aceite tipo 2 no encontrado para la referencia:', referencia);
    }
  }

  private autoCompleteFiltroAire(referencia: string) {
    const filtro = this.filtros.find(f => f.referencia === referencia);
    if (filtro) {
      this.mantenimientoForm.patchValue({
        filtro: {
          aire: {
            marca: filtro.marca,
            tipo: filtro.tipo
          }
        }
      }, { emitEvent: false });
    } else {
      // Limpiar los campos si no se encuentra el filtro
      this.mantenimientoForm.patchValue({
        filtro: {
          aire: {
            marca: '',
            tipo: ''
          }
        }
      }, { emitEvent: false });
      console.error('Filtro aire no encontrado para la referencia:', referencia);
    }
  }

  private autoCompleteFiltroAceite(referencia: string) {
    const filtro = this.filtros.find(f => f.referencia === referencia);
    if (filtro) {
      this.mantenimientoForm.patchValue({
        filtro: {
          aceite: {
            marca: filtro.marca,
            tipo: filtro.tipo
          }
        }
      }, { emitEvent: false });
    } else {
      // Limpiar los campos si no se encuentra el filtro
      this.mantenimientoForm.patchValue({
        filtro: {
          aceite: {
            marca: '',
            tipo: ''
          }
        }
      }, { emitEvent: false });
      console.error('Filtro aceite no encontrado para la referencia:', referencia);
    }
  }

  private loadOptions() {
    // Cargar las opciones para vehículos, aceites y filtros
    this.vehiculoService.getVehiculos()
      .pipe(catchError(error => {
        console.error('Error al cargar vehículos', error);
        return of([]);
      }))
      .subscribe(data => this.vehiculos = data);

    this.aceiteService.getAceites()
      .pipe(catchError(error => {
        console.error('Error al cargar aceites', error);
        return of([]);
      }))
      .subscribe(data => this.aceites = data);

    this.filtroService.getFiltros()
      .pipe(catchError(error => {
        console.error('Error al cargar filtros', error);
        return of([]);
      }))
      .subscribe(data => this.filtros = data);
  }

  onSubmit() {
    if (this.mantenimientoForm.valid) {
      this.mantenimientoService.createMantenimiento(this.mantenimientoForm.value)
        .pipe(catchError(error => {
          console.error('Error al crear mantenimiento', error);
          alert('Ha ocurrido un error al crear mantenimiento');
          return of(null);
        }))
        .subscribe(response => {
          if (response) {
            alert('Se ha creado correctamente');
            console.log('Mantenimiento creado', response);
          }
        });
    }
  }
}
