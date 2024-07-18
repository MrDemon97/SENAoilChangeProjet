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
  

];

@NgModule({
 // imports: [RouterModule.forRoot(routes)], 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
