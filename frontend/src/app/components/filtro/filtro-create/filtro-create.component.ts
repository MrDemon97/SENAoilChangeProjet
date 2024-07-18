import { FiltroService } from './../../../services/filtro.service';
import { Component, OnInit } from '@angular/core';
import { Filtro } from '../../../models/filtro.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-filtro-create',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './filtro-create.component.html',
  styleUrls: ['./filtro-create.component.css']
})
export class FiltroCreateComponent {
  nuevoFiltro: Filtro = new Filtro();

  constructor(private filtroService : FiltroService) {}

  createFiltro(): void {
    this.filtroService.createFiltro(this.nuevoFiltro)
    .subscribe(() =>{
      alert('Filtro creado EXITOSAMENTE!');
    },
    (err) =>{
      alert('Error al crear el filtro');
    }
    );
  }
}
