import { Component, Input } from '@angular/core';
import { AceiteService } from '../../../services/aceite.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-aceite-delelte',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './aceite-delete.component.html',
  styleUrl: './aceite-delete.component.css'
})
export class AceiteDeleteComponent {
  @Input() id: string | undefined;
 
  constructor(private aceiteService: AceiteService ) {}

  deleteAceite(): void {
    if (this.id){
      this.aceiteService.deleteAceite(this.id)
      .subscribe( 
        () =>{
          alert('Aceite eliminado con exito');
        },
        (error) =>{
          alert('Error al eliminar el aceite');
        }
      ); 
     }
  }
}