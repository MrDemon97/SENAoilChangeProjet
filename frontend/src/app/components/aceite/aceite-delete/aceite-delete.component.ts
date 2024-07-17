import { Component, Input, OnInit } from '@angular/core';
import { AceiteService } from '../../../services/aceite.service';
import { Aceite } from '../../../models/aceite.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-aceite-update',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './aceite-delete.component.html',
  styleUrl: './aceite-delete.component.css'
})
export class AceiteListComponent {
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
    ) 
     }
  }
}