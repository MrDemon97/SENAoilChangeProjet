import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Filtro } from '../../../models/filtro.model';
import { FiltroService } from '../../../services/filtro.service';

@Component({
  selector: 'app-filtro-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './filtro-search.component.html',
  styleUrls: ['./filtro-search.component.css']
})
export class FiltroSearchComponent {
  referencia = '';
  filtroEncontrado: Filtro | undefined;
  errorMessage: string | undefined;

  constructor(private filtroService: FiltroService) {}

  getFiltroByReferencia(): void {
    this.filtroService.getFiltroByReferencia(this.referencia).subscribe(
      (filtro) => {
        this.filtroEncontrado = filtro;
        this.errorMessage = undefined;
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.errorMessage = 'Filtro no encontrado';
        } else {
          this.errorMessage = 'Error al buscar el filtro';
        }
        this.filtroEncontrado = undefined;
      }
    );
  }
}
