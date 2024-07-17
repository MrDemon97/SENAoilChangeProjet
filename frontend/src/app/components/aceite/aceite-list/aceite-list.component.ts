import { Component, OnInit } from '@angular/core';
import { AceiteService } from '../../../services/aceite.service';
import { Aceite } from '../../../models/aceite.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-aceite-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './aceite-list.component.html',
  styleUrl: './aceite-list.component.css'
})
export class AceiteListComponent implements OnInit {
  ceites: Aceite[] = [];

  constructor(private aceiteService: AceiteService ) {}
  
  ngOnInit(): void {
    this.getAceites();
  }

  getAceites(): void{
    this.aceiteService.getAceites()
    .subscribe(aceites => this.ceites = aceites);
  }

  deleteAceite(id:string): void {
    this.aceiteService.deleteAceite(id)
    .subscribe(() => this.getAceites());
    //Actualizar lista de aceites despues de eliminar
  }

}
