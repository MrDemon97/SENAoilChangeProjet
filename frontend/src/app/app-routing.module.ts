import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* import { AppComponent } from '../app/app.component'; */
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AceiteComponent } from './components/aceite/aceite.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component'; 
export const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'aceite', component: AceiteComponent },
  { path: 'filtro', component: FiltroComponent },
  { path: 'vehiculo', component: VehiculoComponent },
  { path: 'mantenimiento', component: MantenimientoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
