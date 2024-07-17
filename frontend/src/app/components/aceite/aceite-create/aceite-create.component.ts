import { Component, OnInit } from '@angular/core';
import { AceiteService } from '../../../services/aceite.service';
import { Aceite } from '../../../models/aceite.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-aceite-create',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './aceite-create.component.html',
  styleUrls: ['./aceite-create.component.css']
})
export class AceiteCreateComponent {

  nuevoAceite: Aceite = new Aceite(); // Nuevo objeto Aceite para el formulario

  constructor(private aceiteService: AceiteService) {}

  crearAceite(): void {
    this.aceiteService.createAceite(this.nuevoAceite)
      .subscribe(() => {
        alert('Aceite creado exitosamente.');
      },
      (err) => {
        alert('Error al crear el aceite.');
      }
    
    );
    
  }
}
