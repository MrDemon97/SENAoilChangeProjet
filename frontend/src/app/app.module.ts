import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component'; 

// ACEITE COMPONENT

import { AceiteDeleteComponent } from './components/aceite/aceite-delete/aceite-delete.component';
import { AceiteCreateComponent } from './components/aceite/aceite-create/aceite-create.component';
import { AceiteListComponent } from './components/aceite/aceite-list/aceite-list.component';
import { AceiteUpdateComponent } from './components/aceite/aceite-update/aceite-update.component';
import { AceiteSearchComponent } from './components/aceite/aceite-search/aceite-search.component';

// FILTRO COMPONENT


import { FiltroListComponent } from './components/filtro/filtro-list/filtro-list.component';
import { FiltroCreateComponent } from './components/filtro/filtro-create/filtro-create.component';
import { FiltroSearchComponent } from './components/filtro/filtro-search/filtro-search.component';
import { FiltroUpdateComponent } from './components/filtro/filtro-update/filtro-update.component';
import { FiltroDeleteComponent } from './components/filtro/filtro-delete/filtro-delete.component';


//SERVICIOS

import { AceiteService } from './services/aceite.service';
import { MantenimientoService } from './services/mantenimiento.service';
import { VehiculoService } from './services/vehiculo.service';
import { FiltroService } from './services/filtro.service';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    VehiculoComponent,
    MantenimientoComponent,
    
    // ACEITE COMPONENT

    AceiteCreateComponent,
    AceiteDeleteComponent,
    AceiteListComponent,
    AceiteUpdateComponent,
    AceiteSearchComponent,

    // FILTRO COMPONENT

    FiltroCreateComponent,
    FiltroUpdateComponent,
    FiltroDeleteComponent,
    FiltroSearchComponent,
    FiltroListComponent,
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
