import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListagemCursosComponent } from './listagem-cursos/listagem-cursos.component';
import { AdicaoCursosComponent } from './adicao-cursos/adicao-cursos.component';


@NgModule({
  declarations: [
    ListagemCursosComponent,
    AdicaoCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
