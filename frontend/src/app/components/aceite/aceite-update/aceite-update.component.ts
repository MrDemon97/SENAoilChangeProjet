import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AceiteService } from '../../../services/aceite.service';
import { Aceite } from '../../../models/aceite.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-aceite-update',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './aceite-update.component.html',
  styleUrl: './aceite-update.component.css'
})
export class AceiteUpdateComponent {
  @Input() aceite: Aceite = {
    _id: '',
    referencia: '',
    marca: '',
    presentacion: 'Galon 4L',
    tipo: 'Semi'
  };
  @Output() AceiteActualizado = new EventEmitter<void>();
  @Output() CancelarEdicion = new EventEmitter<void>();
  
  aceiteTemporal: Aceite = {...this.aceite};
  
  constructor(private aceiteService: AceiteService) {}

  ngOnInit(): void {
    this.aceiteTemporal= {...this.aceite};    
  }

  updateAceite(): void {
    if (this.aceiteTemporal) {
      this.aceiteService.updateAceite(this.aceite._id, this.aceiteTemporal)
        .subscribe(response => {
          if (response && response.updatedAceite) {
            this.aceite = response.updatedAceite;
            alert('Aceite actualizado exitosamente.');
            this.AceiteActualizado.emit();
          } else {
            alert('No se encontró el aceite para actualizar.');
          }
        },
        error => {
          if (error.status === 400) {
            alert('El aceite ya existe o hubo un error al actualizar.');
          } else {
            alert('Error desconocido.');
          }
        });
    }
  }

  cancelar(): void {
    this.aceiteTemporal = { ...this.aceite }; // Restaurar el estado original
    this.CancelarEdicion.emit();
  }
}