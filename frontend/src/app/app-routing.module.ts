import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



/* import { AppComponent } from '../app/app.component'; */
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
//import { AceiteComponent } from './components/aceite/aceite.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component'; 
import { AceiteDeleteComponent } from './components/aceite/aceite-delete/aceite-delete.component';
import { AceiteCreateComponent } from './components/aceite/aceite-create/aceite-create.component';
import { AceiteListComponent } from './components/aceite/aceite-list/aceite-list.component';
import { AceiteSearchComponent } from './components/aceite/aceite-search/aceite-search.component';
//import { AceiteUpdateComponent } from './components/aceite/aceite-update/aceite-update.component';

export const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  //{ path: 'aceite', component: AceiteComponent },
  { path: 'Aceite-Search', component: AceiteSearchComponent},
  { path: 'Aceite-Create', component: AceiteCreateComponent},
  { path: 'Aceite-List', component: AceiteListComponent},
  //{ path: 'Aceite-Delete', component: AceiteDeleteComponent},
  //{ path: 'Aceite-Update', component: AceiteUpdateComponent},
  { path: 'filtro', component: FiltroComponent },
  { path: 'vehiculo', component: VehiculoComponent },
  { path: 'mantenimiento', component: MantenimientoComponent }
];

@NgModule({
 // imports: [RouterModule.forRoot(routes)], 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
