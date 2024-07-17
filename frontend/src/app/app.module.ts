import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component'; 
import { AceiteDeleteComponent } from './components/aceite/aceite-delete/aceite-delete.component';
import { AceiteCreateComponent } from './components/aceite/aceite-create/aceite-create.component';
import { AceiteListComponent } from './components/aceite/aceite-list/aceite-list.component';
import { AceiteUpdateComponent } from './components/aceite/aceite-update/aceite-update.component';
import { AceiteSearchComponent } from './components/aceite/aceite-search/aceite-search.component';

import { AceiteService } from './services/aceite.service';
import { MantenimientoService } from './services/mantenimiento.service';
import { VehiculoService } from './services/vehiculo.service';
import { FiltroService } from './services/filtro.service';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    FiltroComponent,
    VehiculoComponent,
    MantenimientoComponent,
    AceiteCreateComponent,
    AceiteDeleteComponent,
    AceiteListComponent,
    AceiteUpdateComponent,
    AceiteSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    VehiculoService,
    AceiteService,
    FiltroService,
    MantenimientoService
  ],

  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
