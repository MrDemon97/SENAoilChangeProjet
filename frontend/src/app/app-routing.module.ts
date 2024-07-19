import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



/* import { AppComponent } from '../app/app.component'; */
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
//import { AceiteComponent } from './components/aceite/aceite.component';

// COMPONENTES ACEITE

import { AceiteDeleteComponent } from './components/aceite/aceite-delete/aceite-delete.component';
import { AceiteCreateComponent } from './components/aceite/aceite-create/aceite-create.component';
import { AceiteListComponent } from './components/aceite/aceite-list/aceite-list.component';
import { AceiteSearchComponent } from './components/aceite/aceite-search/aceite-search.component';
import { AceiteUpdateComponent } from './components/aceite/aceite-update/aceite-update.component';

// COMPONENTES FILTRO

import { FiltroListComponent } from './components/filtro/filtro-list/filtro-list.component';
import { FiltroCreateComponent } from './components/filtro/filtro-create/filtro-create.component';
import { FiltroSearchComponent } from './components/filtro/filtro-search/filtro-search.component';
import { FiltroUpdateComponent } from './components/filtro/filtro-update/filtro-update.component';
import { FiltroDeleteComponent } from './components/filtro/filtro-delete/filtro-delete.component';

// COMPONENTES VEHICULO

import { VehiculoSearchComponent } from './components/vehiculo/vehiculo-search/vehiculo-search.component';
import { VehiculoCreateComponent } from './components/vehiculo/vehiculo-create/vehiculo-create.component';
import { VehiculoListComponent } from './components/vehiculo/vehiculo-list/vehiculo-list.component';
import { VehiculoDeleteComponent } from './components/vehiculo/vehiculo-delete/vehiculo-delete.component';
import { VehiculoUpdateComponent } from './components/vehiculo/vehiculo-update/vehiculo-update.component';

// COMPONENTES MANTENIMIENTO

import { MantenimientoCreateComponent } from './components/mantenimiento/mantenimiento-create/mantenimiento-create.component';
import { MantenimientoListComponent } from './components/mantenimiento/mantenimiento-list/mantenimiento-list.component';

export const routes: Routes = [

  { path: '', component: BienvenidaComponent },

  // PATH ACEITES
  
  { path: 'Aceite-Search', component: AceiteSearchComponent},
  { path: 'Aceite-Create', component: AceiteCreateComponent},
  { path: 'Aceite-List', component: AceiteListComponent},
  //{ path: 'Aceite-Delete', component: AceiteDeleteComponent},
  //{ path: 'Aceite-Update', component: AceiteUpdateComponent},
  
  // PATH FILTROS

  { path: 'Filtro-Search', component: FiltroSearchComponent},
  { path: 'Filtro-Create', component: FiltroCreateComponent},
  { path: 'Filtro-List', component: FiltroListComponent},
  //{ path: 'Filtro-Delete', component: FiltroDeleteComponent},
  //{ path: 'Filtro-Update', component: FiltroUpdateComponent},
  
  //PATH VEHICULOS

  { path: 'Vehiculo-Search', component: VehiculoSearchComponent},
  { path: 'Vehiculo-Create', component: VehiculoCreateComponent},
  { path: 'Vehiculo-List', component: VehiculoListComponent},
  //{ path: 'Vehiculo-Delete', component: VehiculoDeleteComponent},
  //{ path: 'Vehiculo-Update', component: VehiculoUpdateComponent},

  // PATH MANTENIMIENTO

  { path: 'Mantenimiento-Create', component: MantenimientoCreateComponent },
  { path: 'Mantenimiento-List', component: MantenimientoListComponent},



];

@NgModule({
 // imports: [RouterModule.forRoot(routes)], 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
