import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AceiteComponent } from './components/aceite/aceite.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component'; 
//asa
//Serv
import { AceiteService } from './services/aceite.service';
import { MantenimientoService } from './services/mantenimiento.service';
import { VehiculoService } from './services/vehiculo.service';
import { FiltroService } from './services/filtro.service';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    AceiteComponent,
    FiltroComponent,
    VehiculoComponent,
    MantenimientoComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    VehiculoService,
    AceiteService,
    FiltroService,
    MantenimientoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
