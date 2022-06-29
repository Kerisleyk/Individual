import { AdicaoCursosComponent } from './adicao-cursos/adicao-cursos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemCursosComponent } from './listagem-cursos/listagem-cursos.component';

export const routesCursos: Routes = [
  { path: 'listagem-cursos', component: ListagemCursosComponent },
  { path: 'adicao-cursos', component: AdicaoCursosComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routesCursos)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
