import { Component, OnInit } from '@angular/core';
import { Filtro } from '../../../models/filtro.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FiltroUpdateComponent } from '../filtro-update/filtro-update.component';
import { FiltroService } from '../../../services/filtro.service';


@Component({
  selector: 'app-filtro-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, FiltroUpdateComponent],
  templateUrl: './filtro-list.component.html',
  styleUrl: './filtro-list.component.css'
})
export class FiltroListComponent implements OnInit{
  filtros: Filtro[] = [];
  mostrarFormularioActualizar: boolean = false;
  filtroSeleccionado: Filtro = {
    _id: '',
    referencia: '',
    marca: '',
    tipo: 'Aceite'
  };

  constructor(private filtroService: FiltroService) {}

  ngOnInit(): void {
    this.getFiltros();
  }

  getFiltros(): void{
    this.filtroService.getFiltros().subscribe((filtros) => (this.filtros = filtros));
  }

  deleteFiltro(id: string): void {
    this.filtroService.deleteFiltro(id).subscribe(
      () => {
        alert("Eliminado con exito!")
        this.getFiltros();
      },
      (error) => {
        alert("Error al eliminar el filtro");
      }
    );
  }

  actualizarFiltro(filtro: Filtro): void {
    this.filtroSeleccionado = filtro;
    this.mostrarFormularioActualizar = true;
  }

  onFiltroActualizado():void {
    this.mostrarFormularioActualizar = false;
    this.getFiltros();
  } 

}
