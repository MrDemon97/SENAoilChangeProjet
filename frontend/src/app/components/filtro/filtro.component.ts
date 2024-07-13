import { Component, OnInit } from '@angular/core';
import { FiltroService } from '../../services/filtro.service';
import { Filtro } from '../../models/filtro.model';

@Component({
  selector: 'app-filtro', // Selector que se usa para insertar este componente en una plantilla HTML
  standalone: true, // Indica que este componente es independiente y no necesita ser declarado en un módulo
  imports: [], // Aquí puedes importar otros módulos o componentes que este componente necesite
  templateUrl: './filtro.component.html', // Ruta al archivo de plantilla HTML de este componente
  styleUrls: ['./filtro.component.css'] // Ruta al archivo de estilos CSS de este componente
})
export class FiltroComponent implements OnInit {
  filtros: Filtro[] = [];
  nuevoFiltro: Filtro = new Filtro("", "", "", "Aire"); // Proporciona los valores necesarios

  constructor(private filtroService: FiltroService) {}

  ngOnInit() {
    this.getFiltros();
  }

  // Método para obtener todos los filtros
  getFiltros() {
    this.filtroService.getFiltros().subscribe(data => {
      this.filtros = data;
    });
  }

  // Método para crear un nuevo filtro
  createFiltro() {
    this.filtroService.createFiltro(this.nuevoFiltro).subscribe(data => {
      console.log('Nuevo filtro creado:', data);
      this.getFiltros(); // Actualizar la lista de filtros
    });
  }

  // Método para obtener un filtro por su referencia
  getFiltroByReferencia(referencia: string) {
    this.filtroService.getFiltroByReferencia(referencia).subscribe(data => {
      console.log('Filtro encontrado:', data);
    });
  }

  // Método para actualizar un filtro por su referencia
  updateFiltro(referencia: string) {
    this.filtroService.updateFiltro(referencia, this.nuevoFiltro).subscribe(data => {
      console.log('Filtro actualizado:', data);
      this.getFiltros(); // Actualizar la lista de filtros
    });
  }

  // Método para eliminar un filtro por su referencia
  deleteFiltro(referencia: string) {
    this.filtroService.deleteFiltro(referencia).subscribe(() => {
      console.log('Filtro eliminado');
      this.getFiltros(); // Actualizar la lista de filtros
    });
  }
}
