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
  templateUrl: './aceite-update.component.html',
  styleUrl: './aceite-update.component.css'
})
export class AceiteListComponent {
  @Input() aceite: Aceite | undefined;
 
  constructor(private aceiteService: AceiteService ) {}

  updateAceite(): void {
    if (this.aceite){
      this.aceiteService.updateAceite(this.aceite._id, this.aceite)
      .subscribe(updatedAceite => this.aceite = updatedAceite);
    }
  }
}