import { Component, OnInit } from '@angular/core';
import { AceiteService } from '../../../services/aceite.service';
import { Aceite } from '../../../models/aceite.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AceiteUpdateComponent } from "../aceite-update/aceite-update.component";

@Component({
  selector: 'app-aceite-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, AceiteUpdateComponent],
  templateUrl: './aceite-list.component.html',
  styleUrls: ['./aceite-list.component.css']
})
export class AceiteListComponent implements OnInit {
  aceites: Aceite[] = [];
  mostrarFormularioActualizar: boolean = false;
  aceiteSeleccionado: Aceite = {
    _id: '',
    referencia: '',
    marca: '',
    presentacion: 'Galon 4L',
    tipo: 'Semi'
  };

  constructor(private aceiteService: AceiteService) {}

  ngOnInit(): void {
    this.getAceites();
  }

  getAceites(): void {
    this.aceiteService.getAceites().subscribe((aceites) => (this.aceites = aceites));
  }

  deleteAceite(id: string): void {
    this.aceiteService.deleteAceite(id).subscribe(
      () => {
        alert("Eliminado con exito!")
        this.getAceites();
      },
      (error) => {
        alert("ERROR AL ELIMINAR");
        console.error('Error al eliminar aceite', error);
      }
    );
  }

  actualizarAceite(aceite: Aceite): void {
    this.aceiteSeleccionado = aceite;
    this.mostrarFormularioActualizar = true;
  }

  /* onSubmit(): void {
    if (this.aceiteSeleccionado) {
      this.aceiteService.updateAceite(this.aceiteSeleccionado._id, this.aceiteSeleccionado).subscribe(
        (updatedAceite) => {
          this.aceiteSeleccionado = updatedAceite;
          this.mostrarFormularioActualizar = false;
          alert('Aceite actualizado exitosamente.');
          this.getAceites(); // Refresca la lista de aceites
        },
        (error) => {
          alert('Error al actualizar el aceite.');
        }
      );
    }
  } */

    onAceiteActualizado(): void {
      this.mostrarFormularioActualizar = false;
      this.getAceites(); // Refresca la lista de aceites
    }
}
