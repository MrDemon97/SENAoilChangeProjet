import { Component, OnInit } from '@angular/core';
import { AceiteService } from '../../services/aceite.service';
import { Aceite } from '../../models/aceite.model';

@Component({
  selector: 'app-aceite', // Selector que se usa para insertar este componente en una plantilla HTML
  standalone: true, // Indica que este componente es independiente y no necesita ser declarado en un módulo
  imports: [], // Aquí puedes importar otros módulos o componentes que este componente necesite
  templateUrl: './aceite.component.html', // Ruta al archivo de plantilla HTML de este componente
  styleUrls: ['./aceite.component.css'] // Ruta al archivo de estilos CSS de este componente
})
export class AceiteComponent implements OnInit {
  aceites: Aceite[] = [];
  nuevoAceite: Aceite = new Aceite(); // Inicializa un nuevo aceite

  constructor(private aceiteService: AceiteService) {}

  ngOnInit() {
    this.getAceites();
  }

  // Método para obtener todos los aceites
  getAceites() {
    this.aceiteService.getAceites().subscribe(data => {
      this.aceites = data;
    });
  }

  // Método para crear un nuevo aceite
  createAceite() {
    this.aceiteService.createAceite(this.nuevoAceite).subscribe(data => {
      console.log('Nuevo aceite creado:', data);
      this.getAceites(); // Actualizar la lista de aceites
    });
  }

  // Método para obtener un aceite por su referencia
  getAceiteByReferencia(referencia: string) {
    this.aceiteService.getAceiteByReferencia(referencia).subscribe(data => {
      console.log('Aceite encontrado:', data);
    });
  }

  // Método para actualizar un aceite por su referencia
  updateAceite(referencia: string) {
    this.aceiteService.updateAceite(referencia, this.nuevoAceite).subscribe(data => {
      console.log('Aceite actualizado:', data);
      this.getAceites(); // Actualizar la lista de aceites
    });
  }

  // Método para eliminar un aceite por su referencia
  deleteAceite(referencia: string) {
    this.aceiteService.deleteAceite(referencia).subscribe(() => {
      console.log('Aceite eliminado');
      this.getAceites(); // Actualizar la lista de aceites
    });
  }
}
