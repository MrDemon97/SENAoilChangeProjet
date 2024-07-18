import { Component, Input } from '@angular/core';
import { FiltroService } from '../../../services/filtro.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-filtro-delete',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './filtro-delete.component.html',
  styleUrl: './filtro-delete.component.css'
})
export class FiltroDeleteComponent {
  @Input() id: string | undefined;

  constructor(private filtroService: FiltroService) {}

  deleteFiltro(): void {
    if (this.id){
      this.filtroService.deleteFiltro(this.id)
      .subscribe(
        () => {
          alert('Filtro eliminado con exito!');
        },
        (error) => {
          alert('Error al eliminar el filtro');
        }
      );
    }
  }
}
