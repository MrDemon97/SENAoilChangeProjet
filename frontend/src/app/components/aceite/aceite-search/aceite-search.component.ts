import { Component, OnInit } from '@angular/core';
import { AceiteService } from '../../../services/aceite.service';
import { Aceite } from '../../../models/aceite.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-aceite-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './aceite-search.component.html',
  styleUrl: './aceite-search.component.css'
})

export class AceiteSearchComponent {
  referencia = '';
  marca = '';
  presentacion = '';
  tipo = '';

  aceiteEncontrado: Aceite | undefined;

  constructor(private aceiteService: AceiteService) {}

  getAceiteBuscado(): void {
    this.aceiteService.getAceiteBuscado(this.referencia, this.marca, this.presentacion, this.tipo)
    .subscribe(aceite => this.aceiteEncontrado = aceite,
               error => this.aceiteEncontrado = undefined);
    }     
  }




